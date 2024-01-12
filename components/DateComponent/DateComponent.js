import React, { useState } from 'react'
import {
  format,
  addDays,
  isBefore,
  addMonths,
  subYears,
  addYears,
  differenceInDays,
} from 'date-fns'
import TailwindButton from '../TailwindButton/TailwindButton'

const DateComponent = ({ initialDate = new Date() }) => {
  const [date, setDate] = useState(initialDate)
  const [output, setOutput] = useState('')

  const addDaysToDate = (numberOfDays) => {
    const newDate = addDays(date, numberOfDays)
    setDate(newDate)
    setOutput(
      `Date after adding ${numberOfDays} day(s): ${format(
        newDate,
        'dd/MM/yyyy',
      )}`,
    )
  }

  const compareDates = () => {
    const comparisonDate = new Date()
    const isEarlier = isBefore(date, comparisonDate)
    setOutput(
      `The selected date is ${
        isEarlier ? 'earlier' : 'not earlier'
      } than today.`,
    )
  }

  const addMonthsToDate = () => {
    const newDate = addMonths(date, 1)
    setDate(newDate)
    setOutput(`Date after adding 1 month: ${format(newDate, 'dd/MM/yyyy')}`)
  }

  const subtractYearFromDate = () => {
    const newDate = subYears(date, 1)
    setDate(newDate)
    setOutput(`Date after subtracting 1 year: ${format(newDate, 'dd/MM/yyyy')}`)
  }

  const addYearFromDate = () => {
    const newDate = addYears(date, 1)
    setDate(newDate)
    setOutput(`Date after adding 1 year: ${format(newDate, 'dd/MM/yyyy')}`)
  }

  const calculateDifference = () => {
    const daysDifference = differenceInDays(new Date(), date)
    setOutput(`Difference from today: ${daysDifference} day(s)`)
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-white shadow rounded-md">
    <p className="text-lg font-semibold">
      Selected Date: {format(date, 'dd/MM/yyyy')}
    </p>

    <div className="flex flex-wrap gap-2 justify-center">
      <TailwindButton onClick={() => addDaysToDate(1)}>Add 1 Day</TailwindButton>
      <TailwindButton onClick={() => addDaysToDate(7)}>Add 7 Days</TailwindButton>
      <TailwindButton onClick={compareDates}>Is Earlier Than Today</TailwindButton>
      <TailwindButton onClick={addMonthsToDate}>Add 1 Month</TailwindButton>
      <TailwindButton onClick={subtractYearFromDate}>Subtract 1 Year</TailwindButton>
      <TailwindButton onClick={addYearFromDate}>Add 1 Year</TailwindButton>
      <TailwindButton onClick={calculateDifference}>Days from Today</TailwindButton>
    </div>

    <div className="text-sm font-medium text-gray-600">
      {output}
    </div>
  </div>
  )
}

export default DateComponent
