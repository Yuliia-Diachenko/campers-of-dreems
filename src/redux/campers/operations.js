import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (_, thunkAPI) => {      
        
        try {
            const response = await axios.get('/campers');
            return response.data.items;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        
        }
    });
export const fetchCamper = createAsyncThunk(
    'campers/fetchCamper',
    async (id, thunkAPI) => {      
        
        try {
            const response = await axios.get(`/campers/${id}`);
            return response.data;  
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        
        }
    }
)
export const fetchVisiableCampers = createAsyncThunk(
    'campers/fetchVisiableCampers',
    async (page, limit, thunkAPI) => {
        try {   
            const response = await axios.get(`/campers?page=${page}&limit=${limit}`);

            return response.data;

          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }  
);
