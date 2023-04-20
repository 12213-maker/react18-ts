import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HeaderStyle, { HeaderLeft, HeaderRight } from './style'
import HeaderTitles from '@/assets/data/header-titles.json'
import { setTheme } from '@/store/modules/themeSlice'
import { useAppDispatch } from '@/store'
import { Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { ThemeColor } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const options = ThemeColor.map((item, index) => {
  return {
    label: item.type,
    value:index
  }
})
console.log(options);


const Header: FC<IProps> = () => {

  const dispatch = useAppDispatch()

  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          //isActive是NavLink上面的一个属性，可以直接使用
          className={(props) => {
            return props.isActive ? 'active' : undefined
          }}
        >
          {item.title}
          {/* <i className="icon sprite_01"></i> */}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  function handleChange(value:any) {
    dispatch(setTheme(value))
  }

  return (
    <HeaderStyle>
      <div className='content'>
        <HeaderLeft>
          <a className='logo sprite_01' href="/">网易云音乐</a>
          <div className="title-list">
            {HeaderTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>

        </HeaderLeft>
        <HeaderRight>
          <span className='input'>
            <Input className='HeaderInput' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          </span>
          <span className='center'>创作者中心</span>
          <span className='login'>登录</span>
          <span className='rightselector'>
            <Select
              size='small'
              defaultValue={options[0].label}
              style={{ width: 80 }}
              onChange={handleChange}
              options={options}
            />
          </span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderStyle>
  );
}

export default memo(Header);

