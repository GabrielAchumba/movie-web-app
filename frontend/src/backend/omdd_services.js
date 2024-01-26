
import { $omdbhttp } from 'boot/axios' 

const get_omdb = async (payload) => {

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

const remove_omdb = async (payload) => {

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

const post_omdb = (payload) => {

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

const put_omdb = (payload) => {

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
  get_omdb,
  remove_omdb,
  post_omdb,
  put_omdb,
}