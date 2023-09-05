import { useMemo } from 'react'
import { useEthersProvider, useEthersSigner } from 'hooks/useEthers'
import { getBep20Contract, getWILDContract, getMasterchefContract, getErc721Contract, getPresaleContract, getWildNFTContract } from 'utils/contractHelpers'
import { useNetwork } from 'wagmi'
/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address) => {
  const provider = useEthersProvider()
  return useMemo(() => getBep20Contract(address, provider), [address, provider])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address) => {
  const provider = useEthersProvider()
  return useMemo(() => getErc721Contract(address, provider), [address, provider])
}

export const useWILD = () => {
  const provider = useEthersProvider()
  const { chain } = useNetwork()
  return useMemo(() => getWILDContract(provider, chain?.id), [provider, chain])
}

export const useMasterchef = () => {
  const provider = useEthersProvider()
  const { chain } = useNetwork()
  return useMemo(() => getMasterchefContract(provider, chain?.id), [provider, chain])
}

export const usePresaleContract = () => {
  const signer = useEthersSigner()
  const { chain } = useNetwork()
  return useMemo(() => getPresaleContract(signer, chain?.id), [signer, chain])
}
export const useWildNFT = () => {
  const signer = useEthersSigner()
  const { chain } = useNetwork()
  return useMemo(() => getWildNFTContract(signer, chain?.id), [signer, chain])
}