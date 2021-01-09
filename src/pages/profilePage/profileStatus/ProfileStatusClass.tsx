import React, {ChangeEvent} from 'react';
import style from './ProfileStatus.module.css'

type TProps = {
    status: string
    updateUserStatus: (status: string)=> void
}
type TState = {
    editMode: boolean
    status: string
}
class ProfileStatusClass extends React.Component<TProps, TState> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    };

    componentDidUpdate(prevProps: TProps, prevState: TState) {
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
                        <span onDoubleClick={this.activateEditMode}>
                            {this.state.status ? this.state.status : 'Type your status'}
                        </span>
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

export default ProfileStatusClass;