import React from 'react'

const ExchangeRate = ({exchangedData }) => {
  return (
    <div className='exchange-rate'>
        <h3>Exchange Rate:</h3>
        <h4>{exchangedData.exchangeRate}</h4>
        <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>

    </div>
  )
}

export default ExchangeRate