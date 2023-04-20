import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import hyRequest from '@/service/index'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  return <div>
    Recommend
  </div>
}

export default memo(Recommend);

