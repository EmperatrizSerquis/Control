import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const monthPaymentSlice = createSlice({
  name: 'monthPayment',
  initialState,
  reducers: {
    setAddPayment: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { setAddPayment } = monthPaymentSlice.actions

export default monthPaymentSlice.reducer
