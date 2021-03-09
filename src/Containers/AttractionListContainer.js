import { ReactReduxContext } from 'react-redux'
import { useContext } from 'react'
import AttractionList from '../Components/AttractionList'

const AttractionListContainer = () => {
  const dispatch = useDispatch()
  const { store } = useContext(ReactReduxContext)
  const { attractionList } = store.getState()

  return <AttractionList dispatch={dispatch} {...attractionList} />
}

export default AttractionListContainer
