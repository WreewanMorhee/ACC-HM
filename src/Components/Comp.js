const Comp = ({ set_attraction_list, attraction_list, ...props }) => {
  console.warn(attraction_list, 123)
  const clickToAdd = () => {
    set_attraction_list({
      attraction_list: [...attraction_list, 'abc', 'def'],
    })
  }
  return (
    <>
      <div onClick={clickToAdd}>click me click me</div>
      {attraction_list.map(abc => (
        <div>{abc}</div>
      ))}
    </>
  )
}

export default Comp
