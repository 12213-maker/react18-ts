import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavLink } from 'react-router-dom'
import DiscoverNavStyle from './styled'
import NavLinkList from '@/assets/data/discover-navlist.json'

interface IProps {
  children?: ReactNode
}

const DiscoverNav: FC<IProps> = () => {
  return (
    <DiscoverNavStyle>
      <div className='navcontainer'>
        {
          NavLinkList.map((navItem) => {
            return <NavLink
              key={navItem.to}
              to={navItem.to}
              className={(props) => { return props.isActive ? 'active navitem' : 'navitem' }}
            >
              {navItem.title}
            </NavLink >
          })
        }
      </div>
    </DiscoverNavStyle >
  )
}

export default memo(DiscoverNav);

