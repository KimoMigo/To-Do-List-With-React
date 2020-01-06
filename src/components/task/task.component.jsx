import React from 'react';

import './task.styles.css';

import {connect} from 'react-redux';

import {removeTaskFromList,changeEditableState} from '../../redux/task/task-actions';

const Task = ({task, removeTaskFromList,changeEditableState}) => {
    const {description, dueTime} = task;
    const hours = dueTime.getHours();
    const minutes =dueTime.getMinutes();
    const seconds = dueTime.getSeconds();
    return (
    <div>
        <span>{description}</span>
        <span>{`${hours}:${minutes}:${seconds}`}</span>
        <button onClick={() => changeEditableState(task)}>Edit</button>
        <button onClick={() => removeTaskFromList(task)}>Remove</button>
    </div> 
)};

const mapDispatchToProps = dispatch => ({
    removeTaskFromList : task => dispatch(removeTaskFromList(task)),
    changeEditableState : task => dispatch(changeEditableState(task))
});

export default connect(null,mapDispatchToProps)(Task);