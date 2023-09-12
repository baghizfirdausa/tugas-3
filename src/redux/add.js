import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  users: [],
  id: 1
}

const addSlice = createSlice({
  name: 'addUser',
  initialState,
  reducers: {
    add(state, action) {
      const payload = { ...action.payload }
      const newDate = new Date()
      const nowDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
      state.users.push({ id: state.id, ...payload, registeredDate: nowDate })
      state.id += 1
    },
  },
})

export const { add } = addSlice.actions
export default addSlice.reducer