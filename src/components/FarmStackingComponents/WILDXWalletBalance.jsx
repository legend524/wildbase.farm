import React from 'react'
import { Text } from 'uikit'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getWILDXAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceWILDXUsdc } from 'state/hooks'
import { toReadableAmount } from 'utils/customHelpers'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardUsdValue from './CardUsdValue'
import { useEthersSigner } from 'hooks/useEthers'

const WILDXWalletBalance = () => {
  const { t } = useTranslation()
  const signer = useEthersSigner()
  const { balance } = useTokenBalance(getWILDXAddress())
  const wildPriceUsdt = new BigNumber('0.6') //usePriceWILDXUsdc()
  const usdBalance = new BigNumber(
    toReadableAmount(balance.toString(), 18)
  ).multipliedBy(wildPriceUsdt)

  if (!signer) {
    return (
      <Text color='textDisabled' style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue
        value={toReadableAmount(balance.toString(), 18)}
        color='#493df9'
        lineHeight='36px'
      />
      <br />
      <CardUsdValue value={usdBalance.toNumber()} />
    </>
  )
}

export default WILDXWalletBalance