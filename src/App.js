import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';
import * as yup from 'yup'

import Home from './components/Home'
import Form from './components/Form'
import schema from './validation/formSchema';

const initialFormValues = {
  username: '',
  size: '',
  special: '',
  pepperoni: false,
  basil: false,
  anchovies: false,
  pineapple: false
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
  pepperoni: '',
  basil: '',
  anchovies: '',
  pineapple: ''
}

const initialDisabled = true

export default function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 
  const [ users, setUsers ] = useState([])

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        console.log(res.data)
        setUsers([ res.data, ...users ])

      })
      .catch(err => console.error(err))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }



  useEffect(() => {
    schema
      .isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <div>
          <h1>Lambda Eats</h1>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path='/'>
            <Home />
        </Route>
        <Route path='/pizza'>
          
        </Route>
      </Switch>
      
      <Form path='/pizza'
        values={formValues} 
        change={handleChange} 
        submit={handleSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
