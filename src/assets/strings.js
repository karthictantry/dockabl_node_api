module.exports = {
    // Application Error Codes
    ERROR_CODE_INVALID_FIELDS : 4001,
    ERROR_CODE_DUPLICATE_TASK : 4002,
    ERROR_CODE_TASK_MARKED : 4003,
    ERROR_CODE_TASK_NOT_EXISTS : 4004,

    // Application Error Message Strings
    ERROR_MSG_DUPLICATE_TASK : 'Operation Failed. To-Do Task Already Exists.',
    ERROR_MSG_INVALID_FIELDS : 'Operation Failed. Invalid Data Found in Request.',
    ERROR_MSG_TASK_MARKED : 'Operation Failed. The Task is Already Marked',
    ERROR_MSG_TASK_NOT_EXISTS : 'Operation Failed. Task Does Not Exist',

    // Application Success Message Strings
    CREATED_SUCCESS_MSG : 'To-Do Task Added Successfully.',
    MARKED_SUCCESS_MSG : 'To-Do Task Marked Successfully.',

    // Values used by the application
    RESPONSE_TYPE_VALUE : 'in_channel',
    CONTENT_TYPE : 'application/json'
}