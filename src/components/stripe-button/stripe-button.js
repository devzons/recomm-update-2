import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import CustomButton from '../csutom-button/custom-button'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishabileKey = 'pk_test_51Cwy6RAmwPWsXaL0YhGRIfZZnFJPa7Au2WQFkvQ2YgKFwTfJyVVUmr9DptBvpI2yUjJH98kDKgmPB0admZjGbbMk00Qvyc2Moc'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='E Clothing LLC'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/dxy.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLable='Pay Now'
      token={onToken}
      stripeKey={publishabileKey}
    >
      <CustomButton>PAY NOW</CustomButton>
    </StripeCheckout>
  )
}

export default StripeButton
