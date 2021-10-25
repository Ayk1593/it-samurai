import React, {Component} from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    myStatus = () => {
        if (this.props.profile.userId === this.props.userId) {
            this.activateEditMode();
        }
    }
    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div className={s.profile_status}>
                    <span onDoubleClick={this.myStatus}> {this.props.status || "-----"}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;