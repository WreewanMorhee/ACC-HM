import { handleActions } from 'redux-actions'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  attraction_list: [],
  loading: false,
}

export default handleActions(
  {
    ['Set_Attraction_List']: (
      state,
      { payload: { attraction_list, loading } }
    ) => ({
      ...state,
      attraction_list,
      loading,
    }),
  },
  initialState
)