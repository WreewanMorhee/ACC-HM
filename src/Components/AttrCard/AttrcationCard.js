import { useHistory } from 'react-router'
import styles from './attractioncard.module.css'

const AttrcationCard = ({ images, name, address, id }) => {
  const history = useHistory()
  const clickToDetailPage = () => {
    history.push(`/accu/${id}`)
  }

  return (
    <div onClick={clickToDetailPage} className={styles['card']}>
      <div className={styles['left-box']}>
        <img src={images} alt="attraction point" />
      </div>
      <div className={styles['right-box']}>
        <div className={styles['attr-name']}>{name}</div>
        <div className={styles['attr-addr']}>{address}</div>
      </div>
    </div>
  )
}

export default AttrcationCard
