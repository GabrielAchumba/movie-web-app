import axios from 'axios'
//const axiosInstance = axios.create({ 
  const processEnvNOEENV = "development";

  ///usr/lib/jvm/java-11-openjdk-amd64

  ///opt/jdk-18

    const $http  = axios.create({ 
        baseURL: (processEnvNOEENV == 'production') ? 'https://arcane-inlet-68126.herokuapp.com/' : 'http://localhost:5292/api/',
        headers: {'Content-Type': 'application/json'}
      })


    const $omdbhttp  = axios.create({ 
      baseURL: (processEnvNOEENV == 'production') ? 'http://www.omdbapi.com/' : 'http://www.omdbapi.com/',
      headers: {'Content-Type': 'application/json'},
      })
  
    export { $http, $omdbhttp  }
