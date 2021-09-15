import React, {Component} from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        debugger;
        this.state.editMode = false;
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <div className={s.profile_status}>
                        <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;