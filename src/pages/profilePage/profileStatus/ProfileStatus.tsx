import React, {useState, useEffect, ChangeEvent} from 'react'
import style from './ProfileStatus.module.css'

type TProps = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatus: React.FC<TProps> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    )

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div className={style.userStatus}>
            <h5 className={style.title}>Status:</h5>
            {!editMode
                ? <div className={style.status}>
                    <p onDoubleClick={activateEditMode}>
                        {props.status ? props.status : 'Type your status'}
                    </p>
                </div>
                : <div className={style.status}>
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

export default ProfileStatus