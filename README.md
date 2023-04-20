# `background` [链接](https://baidu.com)

### 1. `类组件/函数式组件`和 TS 结合的类型约束

```javascript
//---------------------函数式组件----------------------


//定义props的类型
{/* 在组件里面传东西，会传入到props.children里面去，但是需要你自己定义children属性 */}
interface IProps{
  children?:React.ReactNode
}
//在函数式组件中使用,其中的props的类型就是IProps
function App：React.FC<IProps>(props){
  return ();
}




//---------------------类组件----------------------


//定义class中state的类型结构
interface IState {
  name: string
}
interface ISnapshot {
  name: string
}
class App3 extends React.PureComponent<IProps, IState, ISnapshot>{
  //一般可以直接这样写state
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

```

### 2.redux——useSelector 和 ts 结合的类型约束

```js
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
//避免使用useSelector的时候找不到值的情况


//1.这样也可以得到state的类型
const state = store.getState()
type IRootState2 = typeof state;
//2.ReturnType用于获取函数的返回值的类型
export type IRootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

//因为store.dispatch是直接使用的所以不需要返回值
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
```
