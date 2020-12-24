import React from "react";
import style from "../../login/Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import FormControl from "../../common/formsControl/FormControl";
import {maxLength, required} from "../../../utilites/validators";
import {TProfile} from "../../../types/types";
import {AboutMeFormData} from "../Profile";

const maxLength50 = maxLength(50)

type TFormOwnProps = {
    profile: TProfile
}

let AboutMeForm: React.FC<InjectedFormProps<AboutMeFormData, TFormOwnProps> & TFormOwnProps> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button>Save</button>
                {props.error &&
                <div className={style.attention}>
                    <span>{props.error}</span>
                </div>
                }
                <h4>About Me</h4>
                <div className={style.input}>
                    <Field component="textarea"
                           name="aboutMe"
                           type="text"
                           placeholder="Type information about yourself"
                           error={props.error}
                           validate={[required]}
                    />
                </div>
                <hr/>
                <div className={style.input}>
                    <Field component={FormControl}
                           name="fullName"
                           type="text"
                           placeholder="Full name"
                           error={props.error}
                           validate={[required, maxLength50]}
                    />
                </div>
                <hr/>
                <h5>Looking for a job as</h5>
                <div className={style.input}>
                    <Field component="input"
                           name="lookingForAJob"
                           type="checkbox"
                           placeholder="Are you looking for a job?"
                           error={props.error}
                           validate={[required]}
                    />
                </div>
                <hr/>
                <h5>Skills</h5>
                <div className={style.input}>
                    <Field component="textarea"
                           name="lookingForAJobDescription"
                           type="text"
                           placeholder="Write about your skills here"
                           error={props.error}
                           validate={[required]}
                    />
                </div>
                <hr/>
                <h5>Contacts :</h5> {Object.keys(props.profile.contacts)
                .map((key, index) => {
                    return (
                        <div key={index + 1}>
                            <img src="#" alt="ico"/>
                            <span className={style.contactDescription}>{key}</span>
                            <div className={style.input}>
                                <Field component={FormControl}
                                       name={'contacts.' + key}
                                       type="text"
                                       placeholder={key}
                                       error={props.error}
                                    // validate={[required]}
                                />
                            </div>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

const AboutMeReduxForm = reduxForm<AboutMeFormData, TFormOwnProps>({form: 'aboutMe'})(AboutMeForm);

export default AboutMeReduxForm

