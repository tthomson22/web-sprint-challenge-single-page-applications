import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(2,'name must be at least 2 characters'),
    size: yup
        .string(),
    special: yup
        .string(),
    pepperoni: yup
        .string(),
    basil: yup
        .boolean(),
    anchovies: yup
        .boolean(),
    pineapple: yup
        .boolean()
})

export default formSchema