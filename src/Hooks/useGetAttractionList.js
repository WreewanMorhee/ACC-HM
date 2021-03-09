import { useContext } from 'react'
import { ReactReduxContext, useDispatch } from 'react-redux'

const get_list_url = (page = 1) =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? `http://localhost:5000/air?page=${page}`
    : `http://localhost:5000/air?page=5`

const page_size = 30
let max_fetch_time

const get_page_list = fetch_url => {
  return new Promise(res => {
    fetch(fetch_url)
      .then(res => res.json())
      .then(result => {
        res(result)
      })
  })
}

export const useGetAttractionList = async () => {
  const { store } = useContext(ReactReduxContext)
  const dispatch = useDispatch()
  const {
    attractionList: { attraction_list, should_fetch, loading },
  } = store.getState()

  if (!should_fetch || loading) return

  dispatch({
    type: 'Set_Attr_All_Data',
    payload: {
      loading: true,
    },
  })
  const { total, data } = await get_page_list(
    get_list_url(Math.floor(attraction_list.length / page_size) + 1)
  )
  const _attraction_list = [...attraction_list, ...data]

  dispatch({
    type: 'Set_Attr_All_Data',
    payload: {
      attraction_list: _attraction_list,
      loading: false,
      should_fetch: false,
      is_end: _attraction_list.length >= total,
    },
  })

  return null
}
