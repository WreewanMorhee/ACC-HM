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

let remove_timer
const max_redetect_time = 20
let detect_time = 0
function App() {
  useEffect(() => {
    const stop_detect = () => {
      clearInterval(remove_timer)
      remove_timer = null
    }

    remove_timer = setInterval(() => {
      detect_time += 1
      if (detect_time > max_redetect_time) {
        stop_detect()
      }
      const host_img = document.querySelector('img[alt="www.000webhost.com"]')
      if (host_img) {
        stop_detect()
        host_img.remove()
      }
    }, 300)
  }, [])

  return (
    <div className={styles['App']}>
      <Switch>
        <Route exact path={['/accu', '/accu/:id']}>
          <AttractionListContainer />
        </Route>

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
