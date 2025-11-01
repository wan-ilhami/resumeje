import { createSlice } from '@reduxjs/toolkit';

const user_initial_state = {
  initialized: false,
  user_id: null,
  name: null,
  email: null,
  picture: null,
  phone_number: null,
  role: null,
  last_synced: null,
};

// slice definition
const slice = createSlice({
  name: 'user',
  initialState: user_initial_state,
  reducers: {},
});

// export const { mutateUserProfile } = slice.actions;
const { reducer } = slice;
export default reducer;