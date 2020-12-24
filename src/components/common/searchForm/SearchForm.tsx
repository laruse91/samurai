import style from "../../header/Header.module.css";
import React from "react";
import {Formik, Form, Field} from "formik";
import { TFilter } from "../../../redux/people-reducer";


type TProps = {
    onFilterChange: (filter: TFilter)=>void
}
const searchFormValidate = (values: any) => {
    const errors = {}
    return errors;
}

const SearchForm: React.FC<TProps> = (props) => {

    const submit = (values: TFilter, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChange(values)
        setSubmitting(false)
    }

    return (
        <div className={style.search}>
            <Formik
                initialValues={{term: ''}}
                validate={searchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term" className={style.searchInput}/>
                        <button  type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
export default SearchForm
