import React,{ useEffect, useState } from 'react'
import { Head } from './Head/Head'
import { Form } from './Form/Form'
import { request } from './request'
import './App.scss'

export const App = () => {
  const [valut, setValut] = useState(null)
  const [queue, setQueue] = useState(true)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [usd, setUsd] = useState(null)
  const [eur, setEur] = useState(null)
  const [currency, setCurrency] = useState({
    fromCurrency: 'UAH',
    toCurrency: '',
  })
  const [input, setInput] = useState({
    valueTo: 1,
    valueFrom: '',
  })

  async function getStat () {
    const EUR = await request('EUR')
    setEur(1 * EUR.rates.UAH)
    const USD = await request('USD')
    setUsd(1 * USD.rates.UAH)
  }

  async function getInfo (value) {
    let list = await request(value)
    getStat()
    setValut(Object.keys(list.rates))
    setCurrency({...currency, fromCurrency:list.base_code, toCurrency:Object.keys(list.rates)[1]})
    setExchangeRate(list.rates[Object.keys(list.rates)[1]])
  }

  useEffect(() => {
    if(valut === null) {
      getInfo('UAH')
    }
  },[valut])

  useEffect(()=> {
    if(queue) {
      setInput({
        ...input, valueFrom: (input.valueTo * exchangeRate).toFixed(2)
      })
    } else {
      setInput({
        ...input, valueTo: (input.valueFrom * exchangeRate).toFixed(2)
      })
    }
  },[queue,input.valueTo, input.valueFrom, currency, exchangeRate])

  useEffect(() => {
    if(valut !== null) {
      if(queue) {
        fetch(`https://open.er-api.com/v6/latest/${currency.fromCurrency}`)
          .then(res => res.json())
          .then(rev => setExchangeRate(rev.rates[currency.toCurrency]))
    } else {
        fetch(`https://open.er-api.com/v6/latest/${currency.toCurrency}`)
          .then(res => res.json())
          .then(rev => setExchangeRate(rev.rates[currency.fromCurrency]))
      }
    }
  },[currency, queue, valut])

  return (
    <div className='app'>
      <Head usd={usd} eur={eur}/>
      <div className='app__body'>
        {valut !== null ? (
          <>
            <Form
              value={input.valueTo}
              setInput={e =>{ 
                setInput({...input, valueTo: e.target.value})
                setQueue(true)
              }}
              valut={valut} 
              currency={currency.fromCurrency}
              onChange={e => {
                setCurrency({...currency, fromCurrency: e.target.value})
                setQueue(true)
              }}
            />
            <Form 
              value={input.valueFrom}
              currency={currency.toCurrency}
              setInput={e =>{ 
                setInput({...input, valueFrom: e.target.value})
                setQueue(false)
              }}
              valut={valut} 
              onChange={e => {
                setCurrency({...currency, toCurrency: e.target.value})
                setQueue(true)
              }}
            />
          </>
        ):(
          <div className='app__load'>Loading...</div>
        )}
    </div>
  </div>
  )
}