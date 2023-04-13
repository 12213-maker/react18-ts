import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Djadio: FC<IProps> = () => {
  return <div>Djadio</div>
}

export default memo(Djadio);

