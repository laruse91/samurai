import React from 'react';
import style from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    };
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status)
    };
    onStatusChange = (event) => {
        this.setState({status: event.currentTarget.value})
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {

        return (
            <div className={style.profileStatus}>
                {!this.state.editMode
                    ? <div className={style.myStatus}>
                        <p onDoubleClick={this.activateEditMode}>
                            {this.props.status ? this.props.status : 'Type your status'}
                        </p>
                    </div>
                    : <div className={style.myStatus}>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status ? this.state.status : 'Type your status'}
                               onChange={this.onStatusChange}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;