import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import affiliateUserSlice from './affiliateUserSlice';
  // import storage from 'redux-persist/lib/storage'

  const createNoopStorage = () => {
    return {
      getItem(_key) {
        return Promise.resolve(null);
      },
      setItem(_key, value) {
        return Promise.resolve(value);
      },
      removeItem(_key) {
        return Promise.resolve();
      },
    };
  };

  const storage = typeof window !== 'undefined' ? createWebStorage("local") : createNoopStorage()


  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({user: userSlice, affiliateUser: affiliateUserSlice})

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export let persistor = persistStore(store)