import style from './SearchForm.module.css'
import React from 'react'
import {Form, Formik} from 'formik'
import {TFilter} from '../../../redux/people-reducer'
import {Input, Select} from 'formik-antd'
import {Button} from '../button/Button'
import {Input as AntInput} from 'antd'

type TProps = {
    onFilterChange: (filter: TFilter) => void
    filter: TFilter
}
type TForm = {
    term: string
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
    const initValues: TForm = {
        term: props.filter.term,
        friend: (props.filter.friend === null ? 'null' : props.filter.friend === true ? 'true' : 'false' )
    }

// todo: Ant Input
    return (
        <div className={style.search}>
            <Formik<TForm> initialValues={initValues} validate={searchFormValidate} onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form>
                        <div className={style.searchInput}>
                            <AntInput.Group compact>
                                <Select name='friend' style={{width: '40%'}}>
                                    <option value='null'>All people</option>
                                    <option value='true'>Followed</option>
                                    <option value='false'>Not followed</option>
                                </Select>
                                {/*@ts-ignore*/}
                                <Input type='text' name='term' placeholder='Search' style={{width: '60%'}} allowClear/>
                            </AntInput.Group>
                            <Button button='Search' type='submit' disabled={isSubmitting}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
})