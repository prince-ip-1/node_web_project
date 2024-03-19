const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res) => res.render("index"));


router.post("/", async(req, res) => {
    try {
        const user = new User(req.body);
        const saveUser = await user.save();
        if(saveUser) {
            res.status(201).redirect("/");
        }
    } catch (e) {
        res.status(401).send(e);
    }
});

module.exports = router;
