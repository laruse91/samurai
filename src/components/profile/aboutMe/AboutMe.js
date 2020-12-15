import React from "react";
import style from './AboutMe.module.css'
import {Field} from "redux-form";
import FormControl from "../../common/formsControl/FormControl";

const AboutMe = (props) => {

    return (
        <div>
            {props.isOwner &&
            <span onClick={props.activateEditMode}>Edit</span>
            }
            <div>
                <h4>About Me</h4>
                <hr/>
                <h5>{props.fullName}</h5>
                <hr/>
                {props.lookingForAJob
                    ? <div>
                        <h5>Looking for a job as</h5>
                        <span>Front-end React developer</span>
                        <hr/>
                        <h5>Skills</h5>
                        <p>{props.lookingForAJobDescription}</p>
                    </div>
                    : <div>
                        <h5>I am working as</h5>
                        <span>Front-end developer</span>
                    </div>
                }
                <h5>Contacts :</h5> {Object.keys(props.contacts)
                .map((key, index) => {
                    return (
                        <div key={index + 1}>
                            <img src="#" alt="ico"/>
                            <span className={style.contactDescription}>{key}</span>
                            <div>
                                <span>{props.contacts[key]}</span>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutMe
