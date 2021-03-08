import { useHistory, useParams } from 'react-router'

export const usePrevAndNext = ({ attraction_list }) => {
  const { id: cur_id } = useParams()
  const history = useHistory()
  const cur_index = attraction_list.findIndex(
    ({ id }) => Number(id) === Number(cur_id)
  )
  const next_id = attraction_list[cur_index + 1]?.id
  const prev_id = attraction_list[cur_index - 1]?.id

  const go_to_next_attr = () => {
    if (next_id) {
      history.push(`/accu/${next_id}`)
    } else {
      alert('這是最後一個景點囉!')
    }
  }

  const go_to_prev_attr = () => {
    if (prev_id) {
      history.push(`/accu/${next_id}`)
    } else {
      alert('這是第一個景點囉!')
    }
  }

  return [go_to_prev_attr, go_to_next_attr]
}
