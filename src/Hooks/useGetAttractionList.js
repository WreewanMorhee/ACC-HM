import { set_attraction_list } from 'actions/attractionlist'

// var myHeaders = new Headers()
// myHeaders.append('accept', 'application/json')
// myHeaders.append(
//   'Cookie',
//   '__cfduid=dbe9d9fcf93820205e3060af4b97c0bff1615146570'
// )

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
// }

let _attr_list = []
const get_list_url = (page = 1) =>
  `https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${page}`
const fetch_body = {
  headers: {
    accept: 'application/json',
  },
}
const page_size = 30
let max_fetch_time
let fetch_time = 0

const handle_fetch_time = total => {
  if (!fetch_time) max_fetch_time = Math.ceil(total / page_size)
  fetch_time += 1
}

export const useGetAttractionList = () => {
  //   const loop_fetch = fetch_url => {
  //     fetch(fetch_url, fetch_body)
  //       .then(res => res.json())
  //       .then(({ total, data }) => {
  //         _attr_list = [..._attr_list, ...data]

  //         handle_fetch_time(total)

  //         if (fetch_time === max_fetch_time) {
  //           fetch_ending()
  //         } else {
  //           return loop_fetch(get_list_url(fetch_time + 1))
  //         }
  //       })
  //   }

  const get_page_list = fetch_url => {
    return new Promise(res => {
      fetch(fetch_url, fetch_body)
        .then(res => res.json())
        .then(({ data }) => {
          res(data)
        })
    })
  }

  const fetch_ending = () => {
    set_attraction_list({
      attraction_list: _attr_list,
      loading: false,
    })
  }

  const loop_fetch = () => {}
  const get_attraction_list = () => {
    set_attraction_list({
      loading: true,
    })
    loop_fetch(get_list_url(fetch_time + 1))
  }

  return get_attraction_list
}
