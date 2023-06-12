const Notification = () => {
  return (
    <div
      id="notification"
      className={`flex bg-white`}>
      <div className="header flex-vertical">
        <h2 className="title">Notifications</h2>
        <div className="close">
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
      <div className="notify-wrapper flex column grow">
        <ul className="notify-control flex pointer">
          <li
            data-target="activities"
            className="notify-control-item active badge">
            Activities
          </li>
          <li
            data-target="notes"
            className="notify-control-item">
            Notes
          </li>
          <li
            data-target="alerts"
            className="notify-control-item">
            Alerts
          </li>
        </ul>
        <div className="tab-panel-wrapper grow">
          <div
            id="activities"
            className="tab-panel notify-tab-content flex column active">
            <div className="notify-content-wrapper grow">
              <ul className="active notify-list scrollable scroll-visible">
                <li className="notify-item new">
                  <a href="#">
                    <div className="notify-image flex-center info">
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">You joined a group</h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item new">
                  <a href="#">
                    <div className="notify-image flex-center warning">
                      <i className="bi bi-hdd"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">Storage is running low</h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center special">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">1 Person sent a file</h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center success">
                      <i className="bi bi-download"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Reports ready to download
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center info">
                      <i className="bi bi-lock"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">2 step verification</h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center warning">
                      <i className="bi bi-hdd"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">Storage is running low</h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center special">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">1 Person sent a file</h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center success">
                      <i className="bi bi-download"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Reports ready to download
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="action">
              <a
                className="btn btn-success"
                href="#">
                <i className="bi bi-check-lg"></i>
                Make All Read
              </a>
              <a
                className="btn btn-error"
                href="#">
                <i className="bi bi-trash"></i>
                Delete All
              </a>
            </div>
          </div>
          <div
            id="notes"
            className="tab-panel notify-tab-content flex column">
            <div className="notify-content-wrapper grow">
              <ul className="active notify-list scrollable scroll-visible">
                <li className="notify-item bold success">
                  <div className="note-box">
                    <div className="notify-content">
                      <h4 className="notify-title">
                        This month{"'"}s report will be prepared.
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                      <div className="note-action flex pointer">
                        <a
                          href="#"
                          className="btn ">
                          Edit
                        </a>
                        <a
                          href="#"
                          className="btn">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="notify-item bold warning">
                  <div className="note-box">
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Payment refund will be made to the customer.
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                      <div className="note-action flex pointer">
                        <a
                          href="#"
                          className="btn ">
                          Edit
                        </a>
                        <a
                          href="#"
                          className="btn">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="notify-item">
                  <div className="note-box">
                    <div className="notify-content">
                      <h4 className="notify-title">
                        The meeting will be held.
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                      <div className="note-action flex pointer">
                        <a
                          href="#"
                          className="btn ">
                          Edit
                        </a>
                        <a
                          href="#"
                          className="btn">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="action">
              <a
                className="btn btn-warning"
                href="#">
                <i className="bi bi-plus"></i>
                Add Notes
              </a>
            </div>
          </div>
          <div
            id="alerts"
            className="tab-panel notify-tab-content flex column">
            <div className="notify-content-wrapper grow">
              <ul className="active notify-list scrollable scroll-visible">
                <li className="notify-item new">
                  <a href="#">
                    <div className="notify-image flex-center warning">
                      <i className="bi bi-lock"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Signed in with a different device.
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item new">
                  <a href="#">
                    <div className="notify-image flex-center warning">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Your billing information is not active.
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Today</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center warning">
                      <i className="bi bi-person"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Your subscription has expired.
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notify-item">
                  <a href="#">
                    <div className="notify-image flex-center warning">
                      <i className="bi bi-hdd"></i>
                    </div>
                    <div className="notify-content">
                      <h4 className="notify-title">
                        Your storage space is running low
                      </h4>
                      <div className="time flex-vertical">
                        <span className="time-icon">
                          <i className="bi bi-clock"></i>
                        </span>
                        <span className="notify-time">Yesterday</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="action">
              <a
                className="btn btn-success"
                href="#">
                <i className="bi bi-check-lg"></i>
                Make All Read
              </a>
              <a
                className="btn btn-error"
                href="#">
                <i className="bi bi-trash"></i>
                Delete All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
