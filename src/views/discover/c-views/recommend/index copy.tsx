import React, { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'

import hyRequest from '@/service/index'

interface IProps {
  children?: ReactNode
}
export interface IBanner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = (props) => {

  const [banners, setBanners] = useState<IBanner[]>([]);//useState是一个函数，可以向其中传入一个泛型

  useEffect(() => {
    const res = hyRequest.get({
      url: '/banner', interceptors: {
        requestSuccessFn: (config) => {
          console.log('shownme'); return config
        }
      }
    }).then((res) => {
      setBanners(res.banners);
    })
  }, [])


  return <div>
    <App3></App3>
    {/* {
      banners.map((banner) => {
        return <img src={banner.imageUrl} key={banner.imageUrl}></img>
      })
    } */}
  </div>
}

export default memo(Recommend);


class App2 extends React.PureComponent<IProps>{
  constructor(props: IProps) {
    super(props)
  }
  render(): React.ReactNode {
    return (
      <div></div>
    )
  }
}
interface IState {
  name: string
}
interface ISnapshot {
  name: string
}
class App3 extends React.PureComponent<IProps, IState, ISnapshot>{
  state = {
    name: 'lnl-showme'
  }
  render(): React.ReactNode {
    return (
      <div>{this.state.name}</div>
    );
  }
  //组件更新之前，保存原始的数据
  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): ISnapshot | null {
    return { name: 'lnl' }
  }
  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: ISnapshot | undefined): void {
      //在这里面可以通过snapshot得到更新前的数据
  }
}