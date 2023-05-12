import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from 'store/store'

// // Type for our state
// export interface CommentState {
//   value: { comment: string; username: string }[]
// }

const initialState = {
  value: [],
}

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // Action to add comment
    addJob: (state, action) => {
      state.value = [...state.value, action.payload]
    },
  },
  // Special reducer for hydrating the state
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.comments,
      }
    },
  },
})

export const { addJob } = jobSlice.actions
export const selectJobs = (state: AppState) => state.jobs.value
export default jobSlice.reducer
