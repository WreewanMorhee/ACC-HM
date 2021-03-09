import classNames from 'classnames'
import { Redirect, Route } from 'react-router'
import Slider from 'react-slick'
import { usePrevAndNext } from 'Hooks/usePrevAndNext'
import { useEffect, useRef } from 'react'
import { useSqueezeTarget } from 'Hooks/useSqueezeTarget'
import styles from './detail.module.scss'
import BackToList from './BackToList/BackToList'
import PrevAndNext from './PrevAndNext/PrevAndNext'
import './slick.min.css'
import './slick-theme.min.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
}

const Detail = ({
  name,
  introduction,
  address,
  tel,
  fax,
  email,
  official_site,
  facebook,
  url,
  ticket,
  remind,
  category,
  service,
  friendly,
  images,
  cur_id,
  is_end,
}) => {
  const [go_to_prev_attr, go_to_next_attr] = usePrevAndNext()
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [cur_id])

  useSqueezeTarget()
  if (is_end && !name) {
    alert('查無此筆資料')
    return <Route path="*" render={() => <Redirect to="/accu" />} />
  }
  if (!name) return <div className={styles['loading']}>loading...</div>

  return (
    <div className={styles['big-box']}>
      <div ref={wrapperRef} className={styles['wrapper']}>
        <div className={styles['img-slider']}>
          <Slider {...settings}>
            {images.map(({ src }, index) => (
              <div key={`${src}-${index + 1}`} className={styles['img-box']}>
                <img src={`${src}/1024x768`} alt={'views point'} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles['name']}>{name}</div>
        <div className={styles['addr']}>
          <a
            className={styles['site-link']}
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={`https://www.google.com.tw/maps/place/${address}`}
          >
            {address}
          </a>
        </div>
        <div className={styles['intro']}>{introduction}</div>

        {(tel || fax || email) && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="far fa-id-card"></i> &nbsp; 聯絡我們
            </div>
            {tel && (
              <div className={styles['info-bar']}>
                <i className="fas fa-mobile-alt"></i> &nbsp;&nbsp;
                <a
                  className={styles['site-link']}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={`tel:${tel}`}
                >
                  {tel}
                </a>
              </div>
            )}
            {fax && (
              <div className={styles['info-bar']}>
                <i className="fas fa-fax"></i> &nbsp;&nbsp;
                <a
                  className={styles['site-link']}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={`fax:${fax}`}
                >
                  {fax}
                </a>
              </div>
            )}
            {email && (
              <div className={styles['info-bar']}>
                <i className="fas fa-envelope"></i> &nbsp;&nbsp;
                <a
                  className={styles['site-link']}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
            )}
          </div>
        )}

        {(official_site || facebook || url) && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="fas fa-globe"></i> &nbsp; 相關網站
            </div>
            {official_site && (
              <div className={styles['info-bar']}>
                <a
                  className={styles['site-link']}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={official_site}
                >
                  官網
                </a>
              </div>
            )}
            {facebook && (
              <div className={styles['info-bar']}>
                <a
                  className={styles['site-link']}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={facebook}
                >
                  臉書
                </a>
              </div>
            )}
            {url && (
              <div className={styles['info-bar']}>
                <a
                  className={styles['site-link']}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={url}
                >
                  台北旅遊網
                </a>
              </div>
            )}
          </div>
        )}

        {ticket && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="fas fa-ticket-alt"></i> &nbsp; 門票
            </div>
            <div className={classNames(styles['info-bar'], styles['ticket'])}>
              {ticket}
            </div>
          </div>
        )}

        {remind && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="fas fa-bell"></i> &nbsp; 提醒
            </div>
            <div className={classNames(styles['info-bar'], styles['remind'])}>
              {remind}
            </div>
          </div>
        )}

        {!!(category && category.length) && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="fas fa-quote-right"></i> &nbsp; 類型
            </div>
            <div className={styles['info-bar']}>
              {category.map(({ name }) => `#${name} `)}
            </div>
          </div>
        )}

        {!!(service && service.length) && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="fas fa-concierge-bell"></i> &nbsp; 提供之服務
            </div>
            <div className={styles['info-bar']}>
              {service.map(({ name }) => `#${name} `)}
            </div>
          </div>
        )}

        {!!(friendly && friendly.length) && (
          <div className={styles['info-section']}>
            <div className={styles['title']}>
              <i className="fas fa-user-friends"></i> &nbsp; 友善措施
            </div>
            <div className={styles['info-bar']}>
              {friendly.map(({ name }) => `#${name} `)}
            </div>
          </div>
        )}
      </div>

      <BackToList />
      <PrevAndNext click_func={go_to_prev_attr} type={'prev'} />
      <PrevAndNext click_func={go_to_next_attr} type={'next'} />
    </div>
  )
}

export default Detail
