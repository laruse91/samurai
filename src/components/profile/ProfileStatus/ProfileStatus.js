import React, {useState, useEffect} from 'react';
import style from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
            setStatus(props.status);
        }, [props.status]
    )

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    };

    return (
        <div className={style.profileStatus}>
            {!editMode
                ? <div className={style.myStatus}>
                    <p onDoubleClick={activateEditMode}>
                        {props.status ? props.status : 'Type your status'}
                    </p>
                </div>
                : <div className={style.myStatus}>
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status ? status : 'Type your status'}
                           onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    )

}

export default ProfileStatus;