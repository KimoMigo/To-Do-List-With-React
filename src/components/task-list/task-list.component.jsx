import React from 'react';

import './task-list.styles.css';

import {connect} from 'react-redux';
import {selectTasksList} from '../../redux/task/task-selectors';
import Task from '../task/task.component';
import EditableTask from '../editable-task/editable-task.component';
import {createStructuredSelector} from 'reselect';

const TasksList = ({tasksList}) => (
    <div className='tasks'>
        <div className='list-header'>
            <span className='task-description'>Task description</span>
            <span className='task-due-time'>Due time</span>
            <span className='edit'>Edit</span>
            <span className='remove'>Remove</span>
        </div>
        <div className='tasks-list'>
            {tasksList
                .sort((task1,task2) => task1.dueTime.getTime() - task2.dueTime.getTime())
                .map(task=> !task.editable 
                           ? (<Task key={task.id} task={task}/>)
                           : <EditableTask key={task.id} task={task}/>)}
        </div>
    </div> 
);

const mapStateToProps = createStructuredSelector({
    tasksList : selectTasksList
});

export default connect(mapStateToProps)(TasksList);