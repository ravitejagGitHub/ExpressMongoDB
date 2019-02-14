const express = require("express");
const UsersModel = require("../models/users")
const router = express.Router();

//Query string => query property in the request object
//http://localhost:3000/users?fname=raviteja&lname=g
router.get("/users", (req, res) => {
    if (req.query.fname && req.query.lname) {
        res.send(`You requested for user ${req.query.fname} ${req.query.lname}`);
    } else {
        res.send(`You requested for users`);
    }
})

//http://localhost:3000/user/raviteja
router.get("/user/:name", (req, res) => {
    res.send(`You requested for user ${req.params.name}`)
})

//http://localhost:3000/error
router.get("/error", (req, res) => {
    throw new Error("This is a forced Error.");
})

//POST
router.post("/User", (req, res) => {

    if (!req.body) {
        return res.status(400).send("Request body missing!!!");
    }
    let model = new UsersModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            res.status(200).send(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//GET
router.get("/User", (req, res) => {
    if (!req.query.email) {
        return res.status(400).send("Missing URL param: email");
    }
    UsersModel.findOne({
        email: req.query.email
    }).then(doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    }).catch(err => {
        res.status(500).json(err);
    })
});

//UPDATE
router.put("/User", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Missing URL param: email");
    }
    UsersModel.findOneAndUpdate({
        email: req.body.email
    }, req.body, {  new : true}).then(doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    }).catch(err => {
        res.status(500).json(err);
    })
});

//GET
router.delete("/User", (req, res) => {
    if (!req.query.email) {
        return res.status(400).send("Missing URL param: email");
    }
    UsersModel.findOneAndDelete({
        email: req.query.email
    }).then(doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc);
        }
        res.status(200).send(doc);
    }).catch(err => {
        res.status(500).json(err);
    })
});
module.exports = router;