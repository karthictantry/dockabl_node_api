var validators = require('./validators');
var Task = require('../models/task-model');
var strings = require('../assets/strings');

/**
 * 
 * @param {List<Task>} list 
 *  TO-DO Tasks Repository
 * @param {Task} task
 *  TO-DO Task 
 * @return
 *   List after marking the task. Error message in case of an error!
 */
let markTask = (list, task) => {

    // isValid() method to validate the task.
    if (validators.isValid(task)) {

        // createTaskObject() method to return an object of Task.
        task = Task.createTaskObject(task);

        // Iterate the list
        for (obj of list) {

            // Check if the 'task' object is present in the list.
            if (validators.isPresent(obj, task)) {

                // Check if the task is previously marked.
                if (obj.isMarked()) {
                    return strings.ERROR_CODE_TASK_MARKED;
                } else {
                    obj.markTask();
                    console.log('Marked obj' + obj);
                    return list;
                }
            }
        }
        return strings.ERROR_CODE_TASK_NOT_EXISTS;
    } else {
        return strings.ERROR_CODE_INVALID_FIELDS;
    }
}

module.exports = {
    markTask : markTask
}