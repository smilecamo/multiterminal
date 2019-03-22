import Taro from '@tarojs/taro'
import api from '../constants/api'
// get封装
function getJSON(url,data){
  return Taro.request({url,data,method:'GET'})
}
// post封装
function getJSON(url,data){
  return Taro.request({url,data,method:'POST'})
}
// 获取总分类
export async function getSort(){
  let sort = await getJSON(api.sortChildren).catch(message=>{
    console.log('sort:'+message );
  })
  return sort
}
export async function getSortChildren(){
  await getJSON(api.sortChildren)
}
// export default getSort