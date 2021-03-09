import { ReactReduxContext } from 'react-redux'
import Detail from 'Components/Detail/Detail'
import { useParams } from 'react-router'
import { useContext } from 'react'

const DetailContainer = props => {
  const { id: cur_id } = useParams()
  const { store } = useContext(ReactReduxContext)
  const {
    attractionList: { attraction_list, is_end },
  } = store.getState()
  const detail_data =
    attraction_list.find(({ id }) => Number(cur_id) === Number(id)) || {}

  return <Detail {...props} {...detail_data} cur_id={cur_id} is_end={is_end} />
}

export default DetailContainer
