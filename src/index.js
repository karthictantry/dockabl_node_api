var add = require('./controllers/add-task');
var mark = require('./controllers/mark-task');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var strings = require('./assets/strings');

// defining an array to work as the database (temporary solution)
var listOfTasks = [];

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
 console.log('Server running on port 3000');
});

// Listen to GET @ 3000 for /listofTasks (Listing all tasks)
app.post("/listTasks", (req, res, next) => {
    let str = '';
    listOfTasks.filter(task =>
        task.getChannelName() == req.body.channel_name && task.getChannelId() == req.body.channel_id) && !task.marked
        .forEach(task => str +=task.name + ', ');
    // Filter the list of tasks for the same channel.
    res.json({
        "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : str.substring(0, str.lastIndexOf(','))
    });
});

// Listen to POST @ 3000 for /addTask (Adding a task)
app.post("/addTask", (req, res, next) => {

    // addTask() method to add the task and return the result.
    let result = add.addTask(listOfTasks, req.body);

    // Checking the method output to check for errors
    if (result === strings.ERROR_CODE_INVALID_FIELDS) {
        // ERROR!
        res.status(200).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.ERROR_MSG_INVALID_FIELDS
        });
    } else if (result === strings.ERROR_CODE_DUPLICATE_TASK) {
        // ERROR!
        res.status(200).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.ERROR_MSG_DUPLICATE_TASK
        });
    } else {
        // SUCCESS
        listOfTasks = result;
        res.status(201).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.CREATED_SUCCESS_MSG
        });
    }
});

// Listen to POST @ 3000 for /markTask (Marking a task)
app.post("/markTask", (req, res, next) => {

    // markTask() method to mark the task and return the result.
    let result = mark.markTask(listOfTasks, req.body);

    // Checking the method output to check for errors
    if (result === strings.ERROR_CODE_TASK_MARKED) {
        // ERROR!
        res.status(200).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.ERROR_MSG_TASK_MARKED
        });
    } else if (result === strings.ERROR_CODE_TASK_NOT_EXISTS) {
        // ERROR!
        res.status(200).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.ERROR_MSG_TASK_NOT_EXISTS
        });
    } else if (result === strings.ERROR_CODE_INVALID_FIELDS) {
        // ERROR!
        res.status(200).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.ERROR_MSG_INVALID_FIELDS
        });
    } else {
        // SUCCESS
        listOfTasks = result;
        res.status(200).contentType(strings.CONTENT_TYPE)
        .send(
            {
                "response_type" : strings.RESPONSE_TYPE_VALUE,
                "text" : strings.MARKED_SUCCESS_MSG
        });
    }
});