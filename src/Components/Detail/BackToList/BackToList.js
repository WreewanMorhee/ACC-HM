import { useEffect } from 'react'
import { useHistory } from 'react-router'
import styles from './backtolist.module.css'

const BackToList = () => {
  const history = useHistory()
  const clickToBackToList = () => {
    history.push('/accu/')
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <div onClick={clickToBackToList} className={styles['close']}>
      <i className="fas fa-home"></i>
    </div>
  )
}

export default BackToList
