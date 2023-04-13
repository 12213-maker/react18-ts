import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface Iprops {
  name: string
  age: number
  children?: ReactNode
}

//使用react.FC<>使用泛型对该组件进行类型约束,Iprops是用来约束props的类型的
const Demo: FC<Iprops> = (props) => {
  console.log(props.children);

  return (
    <div>
      Foucs
    </div>
  );
}
export default memo(Demo);



//直接对props进行类型约束
// export default function Demo(props: Iprops) {
//   return (
//     <div>Demo</div>
//   )
// }
