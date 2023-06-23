'use client'
import React from 'react'
import PanelWrapper from './Panel/PanelWrapper'
import Panel from './Panel/Panel'
import PanelItem from './Panel/PanelItem'
import {activities, notes, alerts} from '@/data/notification'
import Button from '../Button/Button'
const Tabs = () => {
  const [tabId, setTabId] = React.useState(0)
  const titles = ['Activities', 'Notes', 'Alerts']

  console.log('[Notification->Tabs]: Render')

  return (
    <div className="grow flex-col flex">
      <ul className="flex border-b border-solid border-light-border px-[22px]">
        {titles.map((title, index) => {
          return (
            <li
              key={index}
              className={`${
                tabId === index ? 'notification-active notification-badge' : ''
              } w-1/3 text-center px-4 py-[18px] relative text-light-gray cursor-pointer active:text-primary hover:text-dark`}
              onClick={() => setTabId(index)}>
              {title}
            </li>
          )
        })}
      </ul>
      <Panel>
        {tabId === 0 ? (
          <PanelWrapper>
            <div className="h-[200px] grow">
              <ul className="px-[22px] h-full scrollable scroll-visible">
                {activities.map(
                  ({title, type, icon, timestamp, seen}, index) => {
                    return (
                      <PanelItem
                        key={index}
                        title={title}
                        type={type}
                        seen={seen}
                        timestamp={timestamp}
                        icon={icon}
                      />
                    )
                  },
                )}
              </ul>
            </div>
            <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
              <Button
                title="Make All Read"
                style="bg-success hover:bg-dark-success"
                icon="bi bi-check"
              />
              <Button
                title="Delete All"
                style="bg-error hover:bg-dark-error"
                icon="bi bi-trash"
              />
            </div>
          </PanelWrapper>
        ) : (
          ''
        )}

        {tabId === 1 ? (
          <PanelWrapper>
            <div className="h-[200px] grow">
              <ul className="px-[22px] h-full scrollable scroll-visible">
                {notes.map(({title, type, timestamp, seen}, index) => {
                  return (
                    <PanelItem
                      key={index}
                      title={title}
                      type={type}
                      timestamp={timestamp}
                    />
                  )
                })}
              </ul>
            </div>
            <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
              <Button
                title="Add Notes"
                style="bg-primary hover:bg-dark-primary"
                icon="bi bi-plus"
              />
            </div>
          </PanelWrapper>
        ) : (
          ''
        )}

        {tabId === 2 ? (
          <PanelWrapper>
            <div className="h-[200px] grow">
              <ul className="px-[22px] h-full scrollable scroll-visible">
                {alerts.map(({title, type, icon, timestamp, seen}, index) => {
                  return (
                    <PanelItem
                      key={index}
                      title={title}
                      type={type}
                      seen={seen}
                      timestamp={timestamp}
                      icon={icon}
                    />
                  )
                })}
              </ul>
            </div>
            <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
              <Button
                title="Make All Read"
                style="bg-success hover:bg-dark-success"
                icon="bi bi-check"
              />
              <Button
                title="Delete All"
                style="bg-error hover:bg-dark-error"
                icon="bi bi-trash"
              />
            </div>
          </PanelWrapper>
        ) : (
          ''
        )}
      </Panel>
    </div>
  )
}

export default React.memo(Tabs)
