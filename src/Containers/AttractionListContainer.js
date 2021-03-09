import { connect } from 'react-redux'
import AttractionList from '../Components/AttractionList'

const mapStateToProps = state => {
  const {
    attractionList: { attraction_list, loading, should_fetch, is_end },
  } = state
  return {
    should_fetch,
    attraction_list,
    loading,
    is_end,
  }
}

export default connect(mapStateToProps, null)(AttractionList)
