import {configureStore} from '@reduxjs/toolkit'
import appBehaviorReducer from './slices/app-behavior'

const store = configureStore({
  reducer: {
    appBehavior: appBehaviorReducer,
  },
})
export type StoreDispatch = typeof store.dispatch
export default store
