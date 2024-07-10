// store.js
import { configureStore } from '@reduxjs/toolkit';
import alumniReducer from './features/alumni/alumniSlice';
import updateadminReducer from './features/updateAdmin/updateAdminSlice'
import updatealumniReducer from './features/updateAlumni/UpdateAlumniSlice'
import adminReducer from './features/admin/adminSlice'

const store = configureStore({
  reducer: {
    alumni: alumniReducer,
    admin:adminReducer,
    updateadmin:updateadminReducer,
    updatealumni:updatealumniReducer,
    
  },
});

export default store;
