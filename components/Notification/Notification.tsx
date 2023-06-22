import {
  IAppBehavior,
  toggleNotificationLayout,
} from '@/store/slices/app-behavior'
import {useDispatch, useSelector} from 'react-redux'
import {memo} from 'react'
import {StoreDispatch} from '@/store'
import {Tabs} from './Tabs'

const Notification = () => {
  const dispatch: StoreDispatch = useDispatch()
  const isNotificationOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isNotificationOpen,
  )

  console.log('[Notification]: Render')
  return (
    <div
      className={`${
        isNotificationOpen ? 'right-0' : '-right-full sm:-right-notification'
      } w-full sm:w-notification absolute xl:-right-notification flex flex-col h-full visible effect-linear bg-blue-700 z-50 bg-white`}>
      <div className="justify-between h-header py-[30px] px-[22px] flex items-center">
        <h2 className="text-[22px] font-normal">Notifications</h2>
        <div
          className="text-[25px] font-bold cursor-pointer effect-linear hover:text-primary hover:translate-x-1"
          onClick={() => dispatch(toggleNotificationLayout(false))}>
          <i className="bi bi-arrow-right h-full block"></i>
        </div>
      </div>
      <Tabs />
    </div>
  )
}

export default memo(Notification)
