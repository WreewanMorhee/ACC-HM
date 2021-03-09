import { connect } from 'react-redux'
import Detail from 'Components/Detail/Detail'

const mapStateToProps = state => ({
  attraction_list: state.attractionList.attraction_list,
  is_end: state.attractionList.is_end,
})

export default connect(mapStateToProps)(Detail)
