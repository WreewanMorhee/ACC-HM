import { Route } from 'react-router'
import DetailContainer from 'Containers/DetailContainer'
import { useGetAttractionList } from 'Hooks/useGetAttractionList'
import { useRef } from 'react'
import styles from './list.module.scss'
import AttrcationCard from './AttrCard/AttrcationCard'

const default_img =
  'https://previews.123rf.com/images/booblgum/booblgum1801/booblgum180100230/93266717-taipei-taiwan-city-skyline-with-gray-buildings-isolated-on-white-background-vector-illustration-busi.jpg'

const AttractionList = ({
  attraction_list,
  loading,
  should_fetch,
  is_end,
  dispatch,
}) => {
  useGetAttractionList(should_fetch)
  const listRef = useRef(null)

  const scrollToLoad = () => {
    if (
      listRef?.current.scrollTop + window.innerHeight + 200 >=
      listRef?.current.children[0].clientHeight
    ) {
      if (is_end) return
      dispatch({
        type: 'Set_Attr_All_Data',
        payload: {
          should_fetch: true,
        },
      })
    }
  }

  if (loading && !attraction_list.length)
    return <div className={styles['loading']}>loading...</div>

  return (
    <div onScroll={scrollToLoad} ref={listRef} className={styles['wrapper']}>
      <div className={styles['list']}>
        {attraction_list.map(({ images, name, address, id }) => (
          <AttrcationCard
            key={id}
            images={images[0] ? `${images[0]?.src}/1024x768` : default_img}
            name={name}
            address={address}
            id={id}
          />
        ))}

        {loading && <div className={styles['hint-bar']}>loading...</div>}
        {is_end && <div className={styles['hint-bar']}>資料已全數載入完畢</div>}
        <Route path="/accu/:id">
          <DetailContainer />
        </Route>
      </div>
    </div>
  )
}

export default AttractionList
