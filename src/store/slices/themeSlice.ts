import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  theme: string
}

const initialState: ThemeState = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
