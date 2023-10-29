import { configureStore } from '@reduxjs/toolkit'
import paymentsSlice from '../features/payments/paymentsSlice'
import todaySlice from '../features/todayDate/todaySlice'


export const store = configureStore({
  reducer: {
    payments: paymentsSlice,
    today: todaySlice,
  },
})
