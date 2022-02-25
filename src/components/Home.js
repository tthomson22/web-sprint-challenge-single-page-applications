import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  const routeToForm = () => {
    history.push('/pizza')
  }

  return (
    <div className='home-wrapper'>
      <button
        id='order-pizza'
        onClick={routeToForm}
      >
        Order Pizza
      </button>
    </div>
  )
}
