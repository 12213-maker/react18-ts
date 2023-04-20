import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IinitialState {
  count: number
  age: number
  name: string
  direction?: 'left' | 'right' | 'top' | 'bottom'
}

const initialState: IinitialState = {
  count: 0,
  age: 21,
  name: 'lnl',
  direction: 'left'
}

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  }
})

export default countSlice.reducer;
export const { addCount } = countSlice.actions;