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
 *   List after adding the task. Error message in case of an error!
 */
let addTask = (list, task) => {

    // isValid() method to validate the task.
    if (validators.isValid(task)) {

        // createTaskObject() method to return an object of Task.
        task = Task.createTaskObject(task);

        // Iterate the list
        for (obj of list) {

            // Check if the 'task' object is present in the list.
            if (validators.isPresent(obj, task)) {
                return strings.ERROR_CODE_DUPLICATE_TASK;
            }
        }
        
        // If not present, add the task to the list.
        list.unshift(task);
        return list;
    } else {
        return strings.ERROR_CODE_INVALID_FIELDS;
    }
}

module.exports = {
    addTask: addTask
}