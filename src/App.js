import {
  set_attraction_list,
  set_attraction_loading,
} from 'actions/attractionlist'
import './reset.css'
import styles from './app.module.scss'
import AttractionListContainer from './Containers/AttractionListContainer'
import { Redirect, Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { get_attraction_list } from 'Components/getAttractionList'

function App({ attraction_list, set_attraction_list, set_attraction_loading }) {
  useEffect(() => {
    const handle_attraction_list = async () => {
      const total_list = await get_attraction_list()
      set_attraction_list({
        attraction_list: total_list,
      })
    }

    handle_attraction_list()
  }, [])

  useEffect(() => {
    set_attraction_loading({
      loading: !attraction_list.length,
    })
  }, [attraction_list.length])

  return (
    <div className={styles['App']}>
      <Switch>
        <Route exact path={['/accu', '/accu/:id']}>
          <AttractionListContainer />
        </Route>
        {/* <Route path="/accu/:id">
          <DetailContainer />
        </Route> */}

        <Route path="*" render={() => <Redirect to="/accu" />} />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = {
  set_attraction_list,
  set_attraction_loading,
}

const mapStateToProps = state => ({
  attraction_list: state.attractionList.attraction_list,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
