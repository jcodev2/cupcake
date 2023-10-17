import { useEffect, useState } from 'react'

interface RemainingDate<T> {
  days: T
  hours: T
  minutes: T
  seconds: T
}

const localeDate = (date?: Date) => {
  const d = date || new Date()
  return new Date(d.toLocaleString('en-US'))
}

const mapValues = (
  object: Record<string, unknown>,
  iterator: (key: unknown) => void
) => {
  return Object.keys(object).reduce((acc, key) => {
    // @ts-expect-error
    acc[key] = iterator(object[key])
    return acc
  }, {})
}

const alwaysPositive = (value: number) => Math.max(0, value)

const getRemainingTime = (targetDate: Date) => {
  const currentDate = localeDate()
  const diff = targetDate.getTime() - currentDate.getTime()
  const days = alwaysPositive(Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = alwaysPositive(
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  )

  const minutes = alwaysPositive(
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  )

  const seconds = alwaysPositive(Math.floor((diff % (1000 * 60)) / 1000))
  return { days, hours, minutes, seconds }
}

const fillZeros = (remainingDate: RemainingDate<number>) => {
  // @ts-expect-error
  return mapValues(remainingDate, (value) =>
    `${String(value)}`.padStart(2, '0')
  ) as RemainingDate<string>
}

export const useRemainingTime = (targetDate: Date, { fillingZeros = true }) => {
  const [remainingDate, setRemainingDate] = useState(
    getRemainingTime(targetDate)
  )

  const { seconds, minutes, hours, days } = remainingDate
  const countdownEnded =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0

  useEffect(() => {
    const timer =
      !countdownEnded &&
      setInterval(() => {
        setRemainingDate(getRemainingTime(targetDate))
      }, 1000)

    // @ts-expect-error
    if (countdownEnded) clearInterval(timer)

    // @ts-expect-error
    return () => clearInterval(timer)
  }, [countdownEnded, targetDate])

  const remainingDateToReturn = fillingZeros
    ? fillZeros(remainingDate)
    : remainingDate

  return { ...remainingDateToReturn, countdownEnded }
}
