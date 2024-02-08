import express from "express";
// import { sendMail } from "./controllers/sendMail";
import nodemailer from "nodemailer";

const app = express();

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'javon.jacobi@ethereal.email',
        pass: 'kgzyergz3Fwt2Jz69h'
    }
  });

  const info = await transporter.sendMail({
    from: '"Ethereal Email" <info@ethereal.email>',
    to: "princekumar114101@gmail.com",
    subject: "This is your ethereal mailbox",
    text: "abc text msg",
    html: "<b>Hello This is bold</b>",
  });

  console.log("message sent: %s", info.messageId);
  res.json(info);
};

let PORT = 5000;

app.get("/", (req, res) => res.send("I am Server."));

app.get("/testmail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in Port No. ${PORT}`);
    });
  } catch (error) {}
};

start();
