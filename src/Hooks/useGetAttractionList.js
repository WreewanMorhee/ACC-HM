import { useContext } from 'react'
import { ReactReduxContext, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

const get_list_url = (page = 1) =>
  `https://shiplationbackend.df.r.appspot.com/air?page=${page}`

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
  const { id } = useParams()
  const { store } = useContext(ReactReduxContext)
  const dispatch = useDispatch()
  const {
    attractionList: { should_fetch, attraction_list, loading, page },
  } = store.getState()

  if (!should_fetch || loading || id) return

  const new_page = page + 1

  dispatch({
    type: 'Set_Attr_All_Data',
    payload: {
      loading: true,
    },
  })
  const { total, data } = await get_page_list(get_list_url(new_page))
  const _attraction_list = [...attraction_list, ...data]

  dispatch({
    type: 'Set_Attr_All_Data',
    payload: {
      attraction_list: _attraction_list,
      loading: false,
      should_fetch: false,
      is_end: _attraction_list.length >= total,
      page: new_page,
    },
  })

  return null
}
