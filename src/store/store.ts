import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from './useWebStorage'

const persistConfig = {
  key: 'root',
  storage,
}

const allReducers = combineReducers({
  theme: themeReducer,
})

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
