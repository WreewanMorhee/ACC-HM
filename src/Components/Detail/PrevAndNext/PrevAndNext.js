import classNames from 'classnames'
import styles from './prevnext.module.css'

const PrevAndNext = ({ type, click_func }) => {
  return (
    <div
      onClick={click_func}
      className={classNames(styles['btn'], {
        [styles['prev']]: type === 'prev',
        [styles['next']]: type === 'next',
      })}
    >
      {type === 'prev' ? (
        <i className="fas fa-arrow-left"></i>
      ) : (
        <i className="fas fa-arrow-right"></i>
      )}
    </div>
  )
}

export default PrevAndNext
