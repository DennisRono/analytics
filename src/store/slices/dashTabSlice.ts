import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface tabState {
  tab: string
}

const initialState: tabState = {
  tab: 'dashboard',
}

const admintabSlice = createSlice({
  name: 'dashtab',
  initialState,
  reducers: {
    setDashTab: (state, action: PayloadAction<tabState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setDashTab } = admintabSlice.actions
export default admintabSlice.reducer
