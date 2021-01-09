export type TFieldValidator = (value: string)=>string | undefined

export const required: TFieldValidator = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLength = (maxValue: number): TFieldValidator => (value) => {
    if (value && value.length>maxValue) return `Max length is ${maxValue} symbols`
    return undefined
}