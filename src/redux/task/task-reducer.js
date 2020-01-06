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
        default:
            return state;
    }
};

export default taskReducer;