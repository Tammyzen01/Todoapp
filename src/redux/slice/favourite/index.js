import { createSlice } from '@reduxjs/toolkit'
import * as Helper from '../../contants/reducerName'

export const favourite = createSlice({
    name:Helper.FAVOURITE,
    initialState:{
        favouriteData:[]
    },
    reducers:{
        setFavouriteData:(state,{payload})=>{
           state.favouriteData.push(payload)
        }
    }
})

export const {
   setFavouriteData
} = favourite.actions

export default favourite.reducer