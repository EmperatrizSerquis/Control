import { createSlice } from '@reduxjs/toolkit'
import dataPayments from '../../data/payments'

const initialState = {
  payments: dataPayments,
  paymentsFilteredByDate: [],
  paymentSelected: null,
}

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setPaymentSelected: () => {},
  },
})

export const { setPaymentSelected } = paymentsSlice.actions

export default paymentsSlice.reducer
