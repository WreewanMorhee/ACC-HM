import { connect } from 'react-redux'
import { set_attraction_list } from 'actions/attractionlist'
import Comp from '../Components/Comp'

const mapDispatchToProps = {
  set_attraction_list,
}

const mapStateToProps = state => {
  const {
    attractionList: { attraction_list, loading },
  } = state

  return {
    attraction_list,
    loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
