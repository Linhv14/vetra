import React, { useState, memo, use, useCallback } from 'react'
import NavigatorItem from './NavigatorItem'
import { INavigatorItem } from '@/data/static'
import DropdownItem from '../DropdownItem'
import { navigator } from '@/data/static'

const Navigator = () => {
  const [activeItem, setActiveItem] = useState(1)
  const [activeDropdown, setActiveDropdown] = useState(0)

  const handleSetActiveItem = useCallback((id: number): void => {
    console.log('[Sidebar]: Set new active', id)
    setActiveItem(id)
    setActiveDropdown(0)
  }, [])

  const handleSetActiveDropdown = useCallback((id: number) => {

    setActiveDropdown((pre) => (pre === id ? 0 : id))
  }, [])

  console.log('[Sidebar->Navigator-Box]: Render')

  return (
    <>

      {/* Render Sidebar UI with static data */}
      {Object.entries(navigator).map(
        ([key, items]: [string, INavigatorItem[]]) => (
          <div key={key}>
            <span className="block text-light-gray text-sm py-5 font-light">
              {key}
            </span>
            <ul>
              {items.map((item: INavigatorItem) => {
                return (
                  <NavigatorItem
                    key={item.activeId}
                    title={item.title}
                    badgeType={item.badge?.type}
                    badgeContent={item.badge?.content}
                    icon={item.icon}
                    active={activeItem === item.activeId}
                    activeDropdown={activeDropdown === item.activeId}
                    isParent={item.isParent}
                    link={item.link}
                    onItemClick={() => {
                      if (item.isParent) {
                        handleSetActiveDropdown(item.activeId)
                      } else {
                        handleSetActiveItem(item.activeId)
                      }
                    }}>
                    {item.dropdown &&
                      item.dropdown.map((dropdownItem) => (
                        <DropdownItem
                          title={dropdownItem.name}
                          link={dropdownItem.link}
                          active={activeItem === dropdownItem.activeId}
                          onItemClick={() =>
                            handleSetActiveItem(dropdownItem.activeId)
                          }
                          key={dropdownItem.activeId}
                        />
                      ))}
                  </NavigatorItem>
                )
              })}
            </ul>
          </div>
        ),
      )}
    </>
  )
}

export default memo(Navigator)
