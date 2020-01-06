import React from 'react';

import './task-list.styles.css';

import {connect} from 'react-redux';
import {selectTasksList} from '../../redux/task/task-selectors';
import Task from '../task/task.component';

const TasksList = ({tasksList}) => (
    <div className='tasks-list'>
        <div className='list-header'>
            <span className='task-description'>Task description</span>
            <span className='due-time'>Due time</span>
            <span className='edit'>Edit</span>
            <span className='remove'>Remove</span>
        </div>
        <div className='list-items'>
            {tasksList.map(task=> <Task key={task.id} task={task}/>)}
        </div>
    </div> 
);

const mapStateToProps = state => ({
    tasksList : selectTasksList(state)
});

export default connect(mapStateToProps)(TasksList);