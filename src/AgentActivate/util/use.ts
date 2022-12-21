import React, {useState, useCallback} from 'react'
import {SwaiFetch} from '../../type'

const STEP = {
  one: 1,
  two: 2
}

type InfoProp = {
  ssoEmail?: string | undefined,
  isOwner?: boolean,
  coreLogin?: string | undefined,
  cloud?: string | undefined

}

type TokenProp = {
  'access_token'?: string | undefined
}

type FormProp = {
  email?: string
}

export const useAgentInfo = (swaiFetch: SwaiFetch) => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState<InfoProp | null>({})
  const [token, setToken] = useState<TokenProp | null>(null)
  const [form, setForm] = useState<FormProp | null >(null)
  const [error, setError ] = useState<string | null>(null)
  const [openModal, setOpenModal] = useState(false)

  console.log({swaiFetch})

  const getAgentInfo = ()=>{

  }


  const onChangeStep = useCallback((type: number)=>{
    setStep(type)
  },[])

  const onChangeForm = useCallback((data:any, type: string) => {
    setForm((prev:any)=>({
      ...prev,
      [type]: data
    }))
  },[])

  const onChangeToken = useCallback((data: any)=>{
    setToken(data)
  },[])

  const onChangeInfo = useCallback((data:any, type: string) => {
    setInfo((prev:any)=>({
      ...prev,
      [type]: data
    }))
  },[])

  const onChangeModal = useCallback((open: boolean)=>{
    setOpenModal(open)
  },[])

  return [
    // step,
    // loading,
    // info,
    // token,
    // form,
    // error,
    // openModal,
    // onChangeStep,
    // onChangeForm,
    // onChangeToken,
    // onChangeInfo,
    // onChangeModal
  ]
}