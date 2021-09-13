import React from 'react'
import getTimePeriods from 'utils/getTimePeriods'
import { Text } from '../../../../components/Pancakeswap/uikit/src'

const WithdrawalFeeTimer: React.FC<{ secondsRemaining: number }> = ({ secondsRemaining }) => {
  const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return (
    <Text fontSize="14px">
      {days && days}d : {hours && hours}h : {minutes && minutes}m
    </Text>
  )
}

export default WithdrawalFeeTimer
