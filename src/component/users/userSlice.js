
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
  loading: false,
  users: [],
  error: '',
  searchQuery:'',
  filteredUsers: []
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
})


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    searchByName:(state,action)=>{
      const filteredUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredUsers:
          action.payload.length > 0 ? filteredUsers : [...state.users]
      };
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
      
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
      
    })
  
  }
})
export const { searchByName } = userSlice.actions
export default userSlice.reducer
