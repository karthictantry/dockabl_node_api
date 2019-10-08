/**
 * Task Object Model
 */
class Task {
    
    /**
     * 
     * @param { String } name 
     * @param { String } channelName 
     * @param { String } channelId 
     * @param { Boolean } marked 
     */
    constructor(name, channelName, channelId, marked) {
        this.name = name;
        this.channelName = channelName;
        this.channelId = channelId;
        this.marked = marked;
    }

    getName() {
        return this.name;
    }

    getChannelName() {
        return this.channelName;
    }

    getChannelId() {
        return this.channelId;
    }

    markTask() {
        this.marked = true;
    }

    isMarked() {
        return this.marked;
    }

}

/**
 * 
 * @param {Map<String, any>} object
 * 
 * @returns
 *  A Task object.
 */
let createTaskObject = (object) => {
    return new Task(object.text, object.channel_name, object.channel_id, false);
}

module.exports = {
    Task : Task,
    createTaskObject : createTaskObject
}