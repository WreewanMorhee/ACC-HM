import { useEffect } from 'react'
import { useHistory } from 'react-router'
import styles from './backtolist.module.scss'

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
    <div
      aria-label="關閉"
      data-balloon-pos="left"
      onClick={clickToBackToList}
      className={styles['close']}
    >
      <i className="fas fa-times"></i>
    </div>
  )
}

export default BackToList
