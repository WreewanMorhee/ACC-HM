import { connect } from 'react-redux'
import Detail from 'Components/Detail/Detail'

const mapStateToProps = state => ({
  attraction_list: state.attractionList.attraction_list,
})

export default connect(mapStateToProps)(Detail)
