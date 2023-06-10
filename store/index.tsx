import {configureStore} from '@reduxjs/toolkit'
import appBehaviorReducer from './slices/app-behavior'

const store = configureStore({
  reducer: {
    appBehavior: appBehaviorReducer,
  },
})

export default store
