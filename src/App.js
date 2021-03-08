import logo from './logo.svg'
import './reset.css'
import styles from './app.module.css'
import CompContainer from './Containers/CompContainer'

function App() {
  return (
    <div className={styles['App']}>
      <CompContainer />
    </div>
  )
}

export default App
