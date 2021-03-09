import { connect } from 'react-redux'
import {
  set_attraction_list,
  set_attraction_loading,
} from 'actions/attractionlist'
import AttractionList from '../Components/AttractionList'

const mapDispatchToProps = {
  set_attraction_list,
  set_attraction_loading,
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AttractionList)
