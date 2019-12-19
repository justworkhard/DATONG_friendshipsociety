import axios from 'axios'
export function getCarouselList(params) {
  return axios.post(
    `/api/web/carouselList?ptCode=${params}`,
  )
}
export function getContentCarouselList(params) {
  return axios.post(
    `/api/web/contentCarouselList?ptCode=${params}`,
  )
}
export function getIndexList(params) {
  return axios.post(
    `/api/web/indexlist?parentId=${params.parentId}&ptCode=${params.ptCode}`,
  )
}
export function getNewsList(params) {
  return axios.post(
    `/api/web/searchContentByPtCodeId?colid=${params.colid}&ptCode=${params.ptCode}&pageSize=${params.pageSize}&pageNo=${params.pageNo}`,
  )
}
export function getNewsContent(params) {
  return axios.post(
    `/api/web/searchContentById?id=${params}`,
  )
}
export function getNewsContentByKeyword(params) {
  return axios.post(
    `/api/web/search?ptCode=${params.ptCode}&title=${params.title}`,
  )
}
export function getNextContent(params) {
  return axios.post(
    `/api/web/preNextcontent?id=${params}`,
  )
}
export function getSororityList() {
  return axios.get(
    `/api/web/sororitylList`,
  )
}
export function getReadList() {
  return axios.get(
    `/api/web/readList`,
  )
}
export function getInterList() {
  return axios.get(
    `/api/web/integralList`,
  )
}
