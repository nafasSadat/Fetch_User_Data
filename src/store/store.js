import React from 'react'
import userReducer from '../component/users/userSlice';
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
      user: userReducer
    }
  })
export default store;