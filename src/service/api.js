/*
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 10:34:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\service\api.js
 */
import axios from 'axios'
const Qs = require('qs');
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
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
export function login(params) {
  return axios.post(
    `/api/app/login`, Qs.stringify(params)
  )
}

export function register(params) {
  return axios.post(
    `/api/app/register`, Qs.stringify(params)
  )
}
export function saveInvitation(params) {
  return axios.post(
    `/api/app/saveInvitation`, Qs.stringify(params),{ headers: {
      'token':  sessionStorage.getItem('token') }}
  )
}
export function getQuestionList(params) {
  return axios.get(
    `/api/app/list?colid=${params}`
  )
}
export function getQuestionListPage(params) {
  return axios.post(
    `/api/app/listPage`,Qs.stringify(params)
  )
}
export function getDepartList(params) {
  return axios.get(
    `/api/app/departList`
  )
}
export function repUpNum(params) {
  return axios.post(
    `/api/app/repUpNum`
  )
}
export function repyInvitation(params) {
  return axios.post(
    `/api/app/repyInvitation`,Qs.stringify(params),{
      headers:{
        'token': sessionStorage.getItem("token")
      }
    }
  )
}
export function sendInvitDetail(params) {
  return axios.post(
    `/api/app/sendInvitDeatil`,Qs.stringify(params)
  )
}
export function sendUpNum(params) {
  return axios.post(
    `/api/app/sendUpNum`,Qs.stringify(params),{
      headers:{
        'token': sessionStorage.getItem("token")
      }
    }
  )
}
export function sendColle(params) {
  return axios.post(
    `/api/app/sendConllect`,Qs.stringify(params),{
      headers:{
        'token': sessionStorage.getItem("token")
      }
    }
  )
}
export function upLoad(params) {
  return axios.post(
    `/api/app/pic/upload`,params,{
      headers:{
        'token': sessionStorage.getItem("token")
      }
    }
  )
}
export function portraitUpload(params) {
  return axios.post(
    `/api/app/pic/portraitUpload `,params,{
      headers:{
        'token': sessionStorage.getItem("token")
      }
    }
  )
}
export function updateUserInfo(params) {
  return axios.post(
    `/api/app/updateUserInfo `,Qs.stringify(params),{
      headers:{
        'token': sessionStorage.getItem("token")
      }
    }
  )
}
export function sendInvitSearch(params) {
  return axios.post(
    `/api/app/sendInvitSearch`,Qs.stringify(params),
  )
}
export function userSend(params) {
  return axios.post(
    `/api/app/userSend`,Qs.stringify(params),{ headers: {
      'token':  sessionStorage.getItem('token') }}
  )
}
export function getUsercollect(params) {
  return axios.post(
    `/api/app/userCollect`,Qs.stringify(params),{ headers: {
      'token':  sessionStorage.getItem('token') }}
  )
}


