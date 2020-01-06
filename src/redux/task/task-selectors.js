import {createSelector} from 'reselect';

const selectTask = state => state.task;

export const selectTasksList = createSelector(
    [selectTask],
    task => task.tasks
);