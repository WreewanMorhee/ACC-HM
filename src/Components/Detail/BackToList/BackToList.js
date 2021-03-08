import { useEffect } from 'react'
import { useHistory } from 'react-router'
import styles from './backtolist.module.scss'

const BackToList = () => {
  const history = useHistory()
  const clickToBackToList = () => {
    history.push('/accu/')
  }

  const balloon_data =
    window.innerWidth <= 1080
      ? {}
      : {
          'aria-label': '關閉',
          'data-balloon-pos': 'left',
        }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <div
      {...balloon_data}
      onClick={clickToBackToList}
      className={styles['close']}
    >
      <i className="fas fa-times"></i>
    </div>
  )
}

export default BackToList
