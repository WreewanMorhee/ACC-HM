import { useEffect } from 'react'
import styles from './list.module.scss'
import { get_attraction_list } from './getAttractionList'
import AttrcationCard from './AttrCard/AttrcationCard'
import { Route } from 'react-router'
import DetailContainer from 'Containers/DetailContainer'

const AttractionList = ({
  set_attraction_list,
  set_attraction_loading,
  attraction_list,
  loading,
}) => {
  // useEffect(() => {
  //   const handle_attraction_list = async () => {
  //     const total_list = await get_attraction_list()
  //     set_attraction_list({
  //       attraction_list: total_list,
  //     })
  //   }

  //   handle_attraction_list()
  // }, [])

  // useEffect(() => {
  //   set_attraction_loading({
  //     loading: !attraction_list.length,
  //   })
  // }, [attraction_list.length])

  if (loading) return <div>loading...</div>

  return (
    <div className={styles['list']}>
      {attraction_list.map(({ images, name, address, id }, index) => (
        <AttrcationCard
          images={`${images[0].src}/1024x768`}
          name={name}
          address={address}
          id={id}
        />
      ))}

      <Route path="/accu/:id">
        <DetailContainer />
      </Route>
    </div>
  )
}

export default AttractionList
