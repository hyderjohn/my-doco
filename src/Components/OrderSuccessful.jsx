import { Result } from 'antd'
import React from 'react'

const OrderSuccessful = () => {
  return (
    <Result
    status={succes}
    title="Order Placed"
    subTitle="Order Number: 23456754"
    />
  )
}

export default OrderSuccessful