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
    toggleNotificationLayout: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      return {
        ...initialState,
        isNotificationOpen: action.payload ?? !state.isNotificationOpen,
      }
    },
    toggleSettingLayout: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      return {
        ...initialState,
        isSettingOpen: action.payload ?? !state.isSettingOpen,
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
      if (state.isNotificationOpen) {
        return {
          ...initialState,
          isNotificationOpen: state.isNotificationOpen,
          isCartOpen: action.payload ?? !state.isCartOpen,
        }
      }
      return {
        ...initialState,
        isCartOpen: action.payload ?? !state.isCartOpen,
      }
    },
    toggleAccountLayout: (
      state,
      action: PayloadAction<boolean | undefined>,
    ) => {
      console.log('[Redux]: Account State Change')
      return {
        ...state,
        isAccountOpen: action.payload ?? !state.isAccountOpen,
      }
    },
    resetState: () => {
      return {
        ...initialState,
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
  resetState,
} = appBehaviorSlice.actions

export default appBehaviorSlice.reducer
