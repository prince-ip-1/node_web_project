const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/testing_playlist")
  .then(() => console.log("Connection Success"));

const playlistSchema = new Schema({
  name: {
    type: String,
  },
  ctype: {
    type: String,
    enum: ["front", "back", "side"],
  },
  videos: {
    type:Number,
  },
  author: String,
  email: {
    type:String,
    validate(value){
      if(!validator.isEmail(value)) {
        throw new Error("Email not valid. Please provide a valid Email.");
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

const AddData = async () => {
  try {
    const htmlPlaylist = [
      {
        name: "HtML5s",
        ctype: "front",
        videos: 1050,
        email: "John@Q.Doe",
        author: "JohnQDoe",
        active: true
      }
    ];
    // const cssPlaylist = new Playlist({
    //   name: "Css",
    //   ctype: "Designing",
    //   videos: 127,
    //   author: "JohnEDoe",
    //   active: true,
    // });
    // const jsPlaylist = new Playlist({
    //   name: "Javascript",
    //   ctype: "Front End",
    //   videos: 89,
    //   author: "John Doe",
    //   active: true,
    // });

    const result = await Playlist.insertMany(htmlPlaylist);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

AddData();

const getData = async () => {
  try {
    const data = await Playlist.find()
      // .select({name:1,_id:0})
      // .countDocuments()
      // .limit(2)
      .sort({ age: -1 });
    console.log(data);
  } catch {
    console.log(err);
  }
};

// getData();

const updateData = async (_id) => {
  try {
    const result = await Playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "Css",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    console.log(result);
  } catch {}
};

// updateData("65c75dc883be4ca29a0ddaab"); '

const deleteData = async (_id) => {
  try {
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch {}
};

// deleteData('65c75dc883be4ca29a0ddaaa');
