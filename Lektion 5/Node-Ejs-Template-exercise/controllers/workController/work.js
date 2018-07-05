const express = require("express");
const router = express.Router();
const fs = require('fs')

exports.numberOfHoursWorked(req, res, next) => {
    console.log("number of hours worked calculation endpoint hit");

    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    let workedTime = endTime - startTime;

    res.render('workViews', {
        msg: "worked time = " + workedTime
    });
}