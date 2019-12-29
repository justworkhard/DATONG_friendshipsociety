/*
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 10:34:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\service\api.js
 */
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
export function getDevColumnList(params) {
  return axios.post(
    `/api/web/devColumnList?ptCode=${params}`,
  )
}
export function getWebList(params) {
  return axios.post(
    `/api/web/newsList?ptCode=${params}`,
  )
}
