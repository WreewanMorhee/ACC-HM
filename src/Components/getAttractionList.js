import { dummy_server } from './dummy'

let _attr_list = []
const get_list_url = (page = 1) =>
  `https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${page}`
const fetch_body = {
  headers: {
    accept: 'application/json',
  },
}
const page_size = 30
const get_page_list = fetch_url => {
  return new Promise(res => {
    fetch(fetch_url, fetch_body)
      .then(res => res.json())
      .then(result => {
        res(result)
      })
  })
}
// get_page_list(get_list_url(1))

export const get_attraction_list = async () => {
  // 拿取第一頁資料
  const { total, data: first_list } = await dummy_server()
  const rest_fetch_time = Math.ceil(total / page_size)
  _attr_list = [...first_list]

  // 把剩下的資料拿完
  let rest_list = Array(2)
    .fill()
    .map((_, index) => dummy_server())
  rest_list = await Promise.all(rest_list)
  rest_list.forEach(({ data }) => {
    _attr_list = [..._attr_list, ...data]
  })

  return _attr_list
}
