import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      console.log('data: ', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contactItem, thunkAPI) => {
    try {
      console.log(contactItem);
      const { name, phone } = contactItem;
      const contact = await axios.post('/contacts', { name, phone });
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const contact = await axios.delete(`/contacts/${contactId}`);
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
