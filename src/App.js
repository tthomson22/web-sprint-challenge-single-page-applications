import React, {useState} from "react";
import axios from 'axios';
import * as yup from 'yup'

import Form from './components/Form'
import schema from './validation/formSchema';

const initialFormValues = {
  size: '',
  special: '',
  pepperoni: false,
  basil: false,
  anchovies: false,
  pineapple: false
}

const initialFormErrors = {
  size: '',
  special: '',
  pepperoni: '',
  basil: '',
  anchovies: '',
  pineapple: ''
}

export default function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ users, setUsers ] = useState([])

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        // console.log(res)
        setUsers([ res.data, ...users ])
      })
      .catch(err => console.error(err))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      <Form 
        values={formValues} 
        change={handleChange} 
        submit={handleSubmit}
        errors={formErrors}
      />
    </div>

  );
}
