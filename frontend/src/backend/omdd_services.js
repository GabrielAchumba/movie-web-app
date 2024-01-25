
import { $omdbhttp } from 'boot/axios' 

const get = async (payload) => {

  return new Promise((resolve, reject) => {
      
    $omdbhttp.get(payload.url)
     .then(response => {            
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
  })
}

const remove = async (payload) => {

  return new Promise((resolve, reject) => {
      
    $omdbhttp.delete(payload.url)
     .then(response => {             
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
  })
}

const post = (payload) => {

  return new Promise((resolve, reject) => {
      
    $omdbhttp.post(payload.url, payload.req)
     .then(response => {             
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
 })
}

const put = (payload) => {

  return new Promise((resolve, reject) => {
      
    $omdbhttp.put(payload.url, payload.req)
     .then(response => {             
         resolve(response)
         
     })
     .catch(error => {
       reject(error)
     })
 })
}


export {
  get,
  remove,
  post,
  put,
}