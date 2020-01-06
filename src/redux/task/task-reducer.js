import {TaskActionTypes} from './task-types';

const INITIAL_STATE = {
    tasks : []
}

const taskReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TaskActionTypes.ADD_TASK_TO_LIST :
            return {
                ...state,
                tasks : [...state.tasks, action.payload]
            }
        case TaskActionTypes.REMOVE_TASK_FROM_LIST : 
            return {
                ...state,
                tasks : state.tasks.filter(task => task.id !== action.payload.id)
            }
        default:
            return state;
    }
};

export default taskReducer;