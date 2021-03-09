import { useContext } from 'react'
import { ReactReduxContext, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

const get_list_url = (page = 1) =>
  `https://shiplationbackend.df.r.appspot.com/air?page=${page}`

const get_page_list = async fetch_url => {
  const res = await fetch(fetch_url)
  const _res = await res.json()

  return _res
}

const loop_fetch = async (attraction_list, new_page, target_id) => {
  const { total, data } = await get_page_list(get_list_url(new_page))
  const _attraction_list = [...attraction_list, ...data]

  const target = _attraction_list.find(
    ({ id }) => Number(id) === Number(target_id)
  )

  return target || _attraction_list.length >= total
    ? [_attraction_list, new_page, total]
    : loop_fetch(_attraction_list, new_page + 1, target_id)
}

export const useSqueezeTarget = async () => {
  const { id: cur_id } = useParams()
  const { store } = useContext(ReactReduxContext)
  const dispatch = useDispatch()
  const {
    attractionList: { attraction_list, page, is_end },
  } = store.getState()

  const target = attraction_list.find(({ id }) => Number(id) === Number(cur_id))
  if (target || is_end) return
  const new_page = page + 1

  dispatch({
    type: 'Set_Attr_All_Data',
    payload: {
      loading: true,
    },
  })

  const [_attraction_list, _new_page, total] = await loop_fetch(
    attraction_list,
    new_page,
    cur_id
  )

  dispatch({
    type: 'Set_Attr_All_Data',
    payload: {
      attraction_list: _attraction_list,
      loading: false,
      should_fetch: false,
      is_end: _attraction_list.length >= total,
      page: _new_page,
    },
  })

  return null
}
