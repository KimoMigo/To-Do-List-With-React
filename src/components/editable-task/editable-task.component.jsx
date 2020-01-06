import React from 'react';

import './editable-task.styles.css';

import {connect} from 'react-redux';

import DateTimePicker from 'react-datetime-picker';

import {confirmModification,changeEditableState} from '../../redux/task/task-actions';

class EditableTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description:this.props.task.description,
            dueTime: this.props.task.dueTime
        }
    }

    handleTime = date => this.setState({dueTime : date});

    handleChange = event => {
        event.preventDefault();
        this.setState({description:event.target.value});
    };

    render(){
        const {changeEditableState,confirmModification} = this.props;
        return (
                <div>
                    <input
                        type='text'
                        value={this.state.description}
                        autoFocus
                        onChange={e => this.handleChange(e)}/>
                    <DateTimePicker
                                value={this.state.dueTime}
                                onChange={this.handleTime}/>
                    <button onClick={() => confirmModification({...this.props.task, description:this.state.description, dueTime:this.state.dueTime,editable:false})}>Confirm</button>
                    <button onClick={() => changeEditableState(this.props.task)}>Cancel</button>
                </div>
            );
    }
}

const mapDispatchToProps = dispatch => ({
    confirmModification : task => dispatch(confirmModification(task)),
    changeEditableState : task => dispatch(changeEditableState(task))
})

export default connect(null, mapDispatchToProps)(EditableTask);