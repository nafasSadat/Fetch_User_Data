import React, { useEffect, useState } from 'react'
import { UserTable } from '../../component/tableview/usertable'
import './home.css'
import { Grid } from '@mui/material';
import { fetchUsers } from '../../component/users/userSlice';
import { useSelector, useDispatch } from 'react-redux'

export const Home = () => {
  const user = useSelector(state => state.user)
 const dispatch = useDispatch();
//  console.log("API data from home js ", user)



 useEffect(() => {
   dispatch(fetchUsers())
   
 }, [])



  return (
    <div className='home'>
      <Grid item xs={12}>
      <h2>List Of Users</h2>
      <UserTable user={user}/>
  </Grid>
      
    </div>
  )
}
