import {
  IAppBehavior,
  toggleNotificationLayout,
} from '@/store/slices/app-behavior'
import {useDispatch, useSelector} from 'react-redux'
import {memo} from 'react'
import {StoreDispatch} from '@/store'
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
      <div className="grow flex-col flex">
        <ul className="flex border-b border-solid border-light-border px-[22px]">
          <li className="w-1/3 text-center px-4 py-[18px] relative text-light-gray cursor-pointer active:text-primary hover:text-dark notification-active notification-badge">
            Activities
          </li>
          <li className="w-1/3 text-center px-4 py-[18px] relative text-light-gray cursor-pointer active:text-primary hover:text-dark">
            Notes
          </li>
          <li className="w-1/3 text-center px-4 py-[18px] relative text-light-gray cursor-pointer active:text-primary hover:text-dark">
            Alerts
          </li>
        </ul>
        <div className="relative grow">
          <div className="absolute inset-0 flex flex-col">
            <div className="h-[200px] grow">
              <ul className="px-[22px] h-full scrollable scroll-visible">
                <li className="border-b border-solid border-light-border">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center info">
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-semibold group-hover:text-primary effect-ease">
                        You joined a group
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light-border">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center warning">
                      <i className="bi bi-hdd"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-semibold group-hover:text-primary effect-ease">
                        Storage is running low
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center special">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-semibold group-hover:text-primary effect-ease">
                        1 Person sent a file
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center success">
                      <i className="bi bi-download"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal group-hover:text-primary effect-ease">
                        Reports ready to download
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center info">
                      <i className="bi bi-lock"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal group-hover:text-primary effect-ease">
                        2 step verification
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center warning">
                      <i className="bi bi-hdd"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal group-hover:text-primary effect-ease">
                        Storage is running low
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center special">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal group-hover:text-primary effect-ease">
                        1 Person sent a file
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center success">
                      <i className="bi bi-download"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal group-hover:text-primary effect-ease">
                        Reports ready to download
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
              <a
                className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer bg-success hover:bg-dark-success effect-ease"
                href="#">
                <i className="bi bi-check-lg mr-2"></i>
                Make All Read
              </a>
              <a
                className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer bg-error hover:bg-dark-error effect-ease"
                href="#">
                <i className="bi bi-trash mr-2"></i>
                Delete All
              </a>
            </div>
          </div>
          <div className="absolute inset-0 hidden flex-col">
            <div className="h-[200px] grow">
              <ul className="px-[22px] h-full scrollable scroll-visible">
                <li className="border-b border-solid border-light-border bold">
                  <div className="flex items-center py-[18px]">
                    <div className="px-3">
                      <h4 className="text-[14px] font-semibold text-success">
                        This month{"'"}s report will be prepared.
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                      <div className="gap-3 text-sm pt-2 flex">
                        <a
                          href="#"
                          className="text-error font-light relative cursor-pointer">
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-error font-light relative cursor-pointer">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="border-b border-solid border-light-border bold">
                  <div className="flex items-center py-[18px]">
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal text-warning">
                        Payment refund will be made to the customer.
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                      <div className="gap-3 text-sm pt-2 flex">
                        <a
                          href="#"
                          className="text-error font-light relative cursor-pointer">
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-error font-light relative cursor-pointer">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="border-b border-solid border-light-border">
                  <div className="flex items-center py-[18px]">
                    <div className="px-3">
                      <h4 className="text-[14px] font-normal">
                        The meeting will be held.
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                      <div className="gap-3 text-sm pt-2 flex">
                        <a
                          href="#"
                          className="text-error font-light relative cursor-pointer">
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-error font-light relative cursor-pointer">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
              <a
                className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer btn-warning bg-primary hover:bg-dark-primary"
                href="#">
                <i className="bi bi-plus mr-2"></i>
                Add Notes
              </a>
            </div>
          </div>
          <div className="absolute inset-0 hidden flex-col">
            <div className="h-[200px] grow">
              <ul className="px-[22px] h-full scrollable scroll-visible">
                <li className="border-b border-solid border-light-border new">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center warning">
                      <i className="bi bi-lock"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] group-hover:text-primary effect-ease font-semibold">
                        Signed in with a different device.
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light-border new">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center warning">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] group-hover:text-primary effect-ease font-normal">
                        Your billing information is not active.
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light-border">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center warning">
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] group-hover:text-primary effect-ease font-normal">
                        Your subscription has expired.
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="border-b border-solid border-light- groupborder">
                  <a
                    href="#"
                    className="flex items-center py-[18px] group">
                    <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center warning">
                      <i className="bi bi-hdd"></i>
                    </div>
                    <div className="px-3">
                      <h4 className="text-[14px] group-hover:text-primary effect-ease font-normal">
                        Your storage space is running low
                      </h4>
                      <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
                        <span>
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="text-xs">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
              <a
                className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer bg-success hover:bg-dark-success effect"
                href="#">
                <i className="bi bi-check-lg mr-2"></i>
                Make All Read
              </a>
              <a
                className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer bg-error hover:bg-dark-error effect"
                href="#">
                <i className="bi bi-trash mr-2"></i>
                Delete All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Notification)
