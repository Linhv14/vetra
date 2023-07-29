import {StoreDispatch} from '@/store'
import {resetState} from '@/store/slices/app-behavior'
import React from 'react'
import {useDispatch} from 'react-redux'

const Overlay = () => {
  const dispatch: StoreDispatch = useDispatch()

  const handleResetState = () => {
    console.log('[Overlay]: Reset All State')
    dispatch(resetState())
  }

  console.log('[Overlay]: Re-render')
  return (
    <div
      onClick={handleResetState}
      className="fixed inset-0 bg-black/20"></div>
  )
}

export default Overlay
