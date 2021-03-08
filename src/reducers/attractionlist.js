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
    Set_Attraction_List: (state, { payload: { attraction_list } }) => ({
      ...state,
      attraction_list,
    }),

    Set_Attraction_Loading: (state, { payload: { loading } }) => ({
      ...state,
      loading,
    }),
  },
  initialState
)
