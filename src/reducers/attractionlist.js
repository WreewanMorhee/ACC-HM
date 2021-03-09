import { handleActions } from 'redux-actions'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  attraction_list: [],
  loading: false,
  total: 0,
  is_end: false,
  should_fetch: true,
}

export default handleActions(
  {
    Set_Attr_All_Data: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },

    Set_Attraction_List: (state, { payload: { attraction_list } }) => ({
      ...state,
      attraction_list,
    }),

    Set_Attraction_Loading: (state, { payload: { loading } }) => ({
      ...state,
      loading,
    }),

    Set_Attraction_Total: (state, { payload: { total } }) => ({
      ...state,
      total,
    }),

    Set_Attraction_End: (state, { payload: { is_end } }) => ({
      ...state,
      is_end,
    }),
  },
  initialState
)
