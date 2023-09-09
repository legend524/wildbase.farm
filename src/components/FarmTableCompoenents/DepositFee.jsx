import React from 'react'
import styled from 'styled-components'

const DepositFeeWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`

const DepositFeeDiscounted = styled.div`
  text-decoration: line-through;
`

const DepositFee = ({ depositFee, hasDiscount }) => {
  if (!depositFee) return 'TBA'
  const value = `${depositFee}%`
  const newDepositFee = hasDiscount ? depositFee / 2 : parseFloat(depositFee)
  if (newDepositFee !== parseFloat(depositFee)) {
    return (
      <DepositFeeWrapper>
        <DepositFeeDiscounted>{value}</DepositFeeDiscounted> {depositFee / 2}%
      </DepositFeeWrapper>
    )
  }

  return value
}

export default DepositFee
