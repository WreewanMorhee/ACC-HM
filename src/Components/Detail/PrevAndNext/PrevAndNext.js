import classNames from 'classnames'
import styles from './prevnext.module.scss'

const PrevAndNext = ({ type, click_func }) => {
  const balloon_data =
    window.innerWidth <= 1080
      ? {}
      : {
          'aria-label': type === 'prev' ? '上一個' : '下一個',
          'data-balloon-pos': 'left',
        }

  return (
    <div
      {...balloon_data}
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
