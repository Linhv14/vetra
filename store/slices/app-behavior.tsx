import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface IAppBehaviorState {
  isVetraMove: boolean
  isNotificationOpen: boolean
  isSettingOpen: boolean
  isSidebarOpen: boolean
  isCartOpen: boolean
  isAccountOpen: boolean
}

const initialState: IAppBehaviorState = {
  isVetraMove: false,
  isNotificationOpen: false,
  isSettingOpen: false,
  isSidebarOpen: false,
  isCartOpen: false,
  isAccountOpen: false,
}

const appBehaviorSlice = createSlice({
  name: 'app-behavior',
  initialState,
  reducers: {
    toggleNotificationLayout: (state) => {
      return {
        ...initialState,
        isVetraMove: !state.isVetraMove,
        isNotificationOpen: !state.isNotificationOpen,
      }
    },
    toggleSettingLayout: (state) => {
      return {
        ...initialState,
        isVetraMove: !state.isVetraMove,
        isSettingOpen: !state.isSettingOpen,
      }
    },
    toggleSidebarLayout: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      console.log('[Redux]: SidebarLayout State Change')
      return {
        ...initialState,
        isSidebarOpen: action.payload ?? !state.isSidebarOpen,
      }
    },
    toggleCartLayout: (state, action: PayloadAction<boolean | undefined>) => {
      console.log('[Redux]: CartLayout State Change')
      return {
        ...state,
        isCartOpen: action.payload ?? !state.isCartOpen,
      }
    },
    toggleAccountLayout: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      return {
        ...state,
        isAccountOpen: action.payload ?? !state.isAccountOpen,
      }
    },
  },
})

export interface IAppBehavior {
  appBehavior: IAppBehaviorState
}

export const {
  toggleNotificationLayout,
  toggleSettingLayout,
  toggleSidebarLayout,
  toggleAccountLayout,
  toggleCartLayout,
} = appBehaviorSlice.actions

export default appBehaviorSlice.reducer
