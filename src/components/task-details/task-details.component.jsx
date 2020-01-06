import React from 'react';
import DateTimePicker from 'react-datetime-picker';

import './task-details.styles.css';
/*Redux tools*/
import {addTaskToList} from '../../redux/task/task-actions';
import {connect} from 'react-redux';

class TaskDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description:'',
            dueTime: new Date(),
            editable:false
        }
    }
    handleChange = event => {
        event.preventDefault();
        this.setState({description:event.target.value})
    };
    handleTime = date => this.setState({dueTime:date});
    handleClick = () => {
        console.log('handleClick called');
        this.setState({description:''});
        this.props.addTask({...this.state,id:Date.now()});
    }
    render(){
    return (
        <div className='task-details'>
            <input className='description' 
                type="text" 
                name="text" 
                placeholder="Task description"
                value={this.state.description}
                onChange={e=>this.handleChange(e)}/>
            <DateTimePicker
                className='date-time-picker'
                value={this.state.dueTime}
                onChange={this.handleTime}                            
                />
            <button onClick={this.handleClick}>Add task to list</button>   
        </div>
    );
}
}

const mapDispatchToProps = dispatch => ({
    addTask : task => dispatch(addTaskToList(task))
});

export default connect(null,mapDispatchToProps)(TaskDetails);