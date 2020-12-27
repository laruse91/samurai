import style from "../../header/Header.module.css";
import React from "react";
import {Formik, Form, Field} from "formik";
import {TFilter} from "../../../redux/people-reducer";

type TProps = {
    onFilterChange: (filter: TFilter) => void
}
type TForm = {
    term: ''
    friend: 'null' | 'false' | 'true'
}
const searchFormValidate = (values: any) => {
    const errors = {}
    return errors;
}

const SearchForm: React.FC<TProps> = React.memo((props) => {

    const submit = (values: TForm, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        const filter: TFilter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        props.onFilterChange(filter)
        setSubmitting(false)
    }

    return (
        <div className={style.search}>
            <Formik
                initialValues={{term: '', friend: 'null'}}
                validate={searchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term" className={style.searchInput}/>
                        <Field name="friend" as="select">
                            <option value="null">All people</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only not followed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>

    )
})
export default SearchForm
