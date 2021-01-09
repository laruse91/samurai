import React from 'react'
import style from './AboutMe.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import FormControl from '../../../components/common/formsControl/FormControl'
import {maxLength, required} from '../../../utilites/validators'
import {TProfile} from '../../../types/types'
import {TAboutMeFormData} from '../ProfilePage'
import {Button} from '../../../components/common/button/Button'

const maxLength20 = maxLength(20)

type TFormOwnProps = {
    profile: TProfile
}

const AboutMeForm: React.FC<InjectedFormProps<TAboutMeFormData, TFormOwnProps> & TFormOwnProps> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.aboutMe}>
            {props.error &&
            <div className={style.attention}>
                <span>{props.error}</span>
            </div>
            }
            <div>
                <h3 className={style.title}>Basic information</h3>

                <div className={style.infBlock}>

                    <div className={style.fieldTitle}>
                        <h4>About Me</h4>
                    </div>
                    <div className={style.input}>
                        <Field component={FormControl}
                               name='aboutMe'
                               type='text'
                               placeholder='Type here'
                               error={props.error}
                               validate={[required]}
                        />
                    </div>

                    <div className={style.fieldTitle}>
                        <h4>Looking for a job</h4>
                    </div>
                    <div className={style.checkbox}>
                        <Field component='input'
                               name='lookingForAJob'
                               type='checkbox'
                               error={props.error}
                        />
                    </div>

                    <div className={style.fieldTitle}>
                        <h4>Skills</h4>
                    </div>
                    <div className={style.input}>
                        <Field component={FormControl}
                               name='lookingForAJobDescription'
                               type='text'
                               placeholder='Type here'
                               validate={[required]}
                               error={props.error}
                        />
                    </div>

                    <div className={style.fieldTitle}>
                        <h4>Edit name</h4>
                    </div>
                    <div className={style.input}>
                        <Field component={FormControl}
                               name='fullName'
                               type='text'
                               placeholder='Type here'
                               error={props.error}
                               validate={[required, maxLength20]}
                        />
                    </div>
                </div>

            </div>

            <div>
                <h3 className={style.title}>Contacts</h3>

                {Object.keys(props.profile.contacts)
                    .map((key, index) => {
                        return (
                            <div key={index + 1} className={style.block}>
                                <div className={style.fieldTitle}>
                                    <h4>{key}</h4>
                                </div>
                                <div className={style.input}>
                                    <Field component={FormControl}
                                           name={'contacts.' + key}
                                           type='text'
                                           placeholder={'https://...'}
                                           error={props.error}
                                    />
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className={style.button}>
                <Button button={'Save profile information'}/>
            </div>
        </form>
    )
}

const AboutMeReduxForm = reduxForm<TAboutMeFormData, TFormOwnProps>({form: 'aboutMe'})(AboutMeForm)

export default AboutMeReduxForm

