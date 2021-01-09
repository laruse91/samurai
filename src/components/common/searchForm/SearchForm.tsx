import style from '../../header/Header.module.css'
import React from 'react'
import {Field, Form, Formik} from 'formik'
import {TFilter} from '../../../redux/people-reducer'

type TProps = {
    onFilterChange: (filter: TFilter) => void
}
type TForm = {
    term: ''
    friend: 'null' | 'false' | 'true'
}
const searchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

export const SearchForm: React.FC<TProps> = React.memo((props) => {

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
            <Formik initialValues={{term: '', friend: 'null'}} validate={searchFormValidate} onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form>
                        <Field type='text' name='term' className={style.searchInput}/>
                        <label>
                            <Field type='radio' name='friend' value='null'/>
                            All people
                        </label>
                        <label>
                            <Field type='radio' name='friend' value='true'/>
                            Only followed
                        </label>
                        <label>
                            <Field type='radio' name='friend' value='false'/>
                            Only not followed
                        </label>
                        <button type='submit' disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

