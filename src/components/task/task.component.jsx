import React from 'react';

import './task.styles.css';

import CustomButton from '../custom-button/custom-button.component';

const Task = ({task:{description, dueTime}}) => (
    <div className='task'>
        <span className='task-description'>{description}</span>
        <span className='due-time'>{dueTime}</span>
        <CustomButton>Edit</CustomButton>
        <CustomButton>Remove</CustomButton>
    </div> 
);

export default Task;