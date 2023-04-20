import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import countSlice from "./modules/countSlice";
import themeSlice from "./modules/themeSlice";
import recommendSlice from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    count: countSlice,
    theme: themeSlice,
    recommend: recommendSlice
  }
})


//这样也可以得到state的类型
const state = store.getState()
type IRootState2 = typeof state;

//store.getStore()获取store
export type IRootState = ReturnType<typeof store.getState>;//ReturnType用于获取函数的返回值的类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
type DispatchType = typeof store.dispatch//因为store.dispatch是直接使用的所以不需要返回值
export const useAppDispatch: () => DispatchType = useDispatch;

export default store