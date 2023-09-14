import { ethers } from 'ethers'
// Addresses
import {
  getWILDXAddress,
  getMasterChefAddress,
  getMulticallAddress,
} from 'utils/addressHelpers'

// ABI
import erc20Abi from 'config/abi/erc20.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import wildAbi from 'config/abi/wild.json'
import masterChef from 'config/abi/masterchef.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import { DEFAULT_GAS_PRICE } from 'config/config'
// import { getSettings, getGasPriceInWei } from './settings'

export const getDefaultGasPrice = () => {
  return DEFAULT_GAS_PRICE
}

const getContract = (abi, address, provider) => {
  return new ethers.Contract(address, abi, provider)
}

export const getErc20Contract = (address, provider) => {
  return getContract(erc20Abi, address, provider)
}

export const getLpContract = (address, provider) => {
  return getContract(lpTokenAbi, address, provider)
}
export const getWILDXContract = (provider, chainId) => {
  return getContract(wildAbi, getWILDXAddress(), provider)
}
export const getMasterchefContract = (provider, chainId) => {
  return getContract(masterChef, getMasterChefAddress(), provider)
}
export const getMulticallContract = (provider, chainId) => {
  return getContract(MultiCallAbi, getMulticallAddress(), provider)
}