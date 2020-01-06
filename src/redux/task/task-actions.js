import {TaskActionTypes} from './task-types.js'

export const addTaskToList = task => ({
    type : TaskActionTypes.ADD_TASK_TO_LIST,
    payload : task
});