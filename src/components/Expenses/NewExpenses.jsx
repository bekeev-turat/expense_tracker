import React from 'react'
import Card from '../ui/Card'
import ExpensesForm from '../ExpensesForm'
import './NewExpenses.css'

const NewExpenses = ({addExpenses}) => {
  return (
    <Card className="new-expense">
      <ExpensesForm addExpenses={addExpenses}/>
    </Card>
  )
}

export default NewExpenses