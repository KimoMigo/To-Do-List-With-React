import React from 'react';

import './task.styles.css';

import {connect} from 'react-redux';

import {removeTaskFromList,changeEditableState} from '../../redux/task/task-actions';

const Task = ({task, removeTaskFromList,changeEditableState}) => {
    const {description, dueTime} = task;
    const dueTimeObject = new Date(dueTime);
    console.log(dueTime);
    const hours = dueTimeObject.getHours();
    const minutes = dueTimeObject.getMinutes();
    const seconds = dueTimeObject.getSeconds();
    return (
    <div className='task'>
        <span className='task-description'>{description}</span>
        <span className='task-due-time'>{`${hours}:${minutes}:${seconds}`}</span>
        <div className='edit'>
            <button onClick={() => changeEditableState(task)}>Edit</button>
        </div>
        <div className='remove'>
            <button onClick={() => removeTaskFromList(task)}>Remove</button>
        </div>
    </div> 
)};

const mapDispatchToProps = dispatch => ({
    removeTaskFromList : task => dispatch(removeTaskFromList(task)),
    changeEditableState : task => dispatch(changeEditableState(task))
});

export default connect(null,mapDispatchToProps)(Task);