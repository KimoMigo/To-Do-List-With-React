import {TaskActionTypes} from './task-types.js'

export const addTaskToList = task => ({
    type : TaskActionTypes.ADD_TASK_TO_LIST,
    payload : task
});

export const removeTaskFromList = task => ({
    type : TaskActionTypes.REMOVE_TASK_FROM_LIST,
    payload : task
});

export const confirmModification = task => ({
    type : TaskActionTypes.CONFIRM_MODIFICATION,
    payload : task
});

export const changeEditableState = task => ({
    type : TaskActionTypes.CHANGE_EDITABLE_STATE,
    payload : task
});