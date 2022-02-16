import React from 'react'
import './Head.scss'

export const Head = ({usd, eur}) => {
  return (
    <div className="head">
      <h1 className="head__title">Currency сonverter</h1>
      <h3 className='head__subtitle'>USD: {usd}</h3>
      <h3 className='head__subtitle'>EUR: {eur}</h3>
    </div>
  )
}
