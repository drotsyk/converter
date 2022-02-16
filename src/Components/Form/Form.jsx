import React from 'react'
import './Form.scss'

export const Form = ({valut, currency, value, onChange, setInput}) => {
  return (
    <div className="form">
      <div className="form__body">
        <select className='form__select' onChange={onChange} value={currency}>
          {valut.map((item,index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <label className='form__label' htmlFor="value1">Enter value</label>
        <input className='form__input' onChange={setInput} type="text" id='value1' value={value}/>
      </div>
    </div>
  )
}
