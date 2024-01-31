import axios from 'axios';

const DEFAULT_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest'
}

const KEY = 'Authorization token';

const BASE_URL = 'https://acaodoespirito.com.br/';
const SIGNIN_URL = `${BASE_URL}ob/auth/signin`;
const SIGNOUT_URL = `${BASE_URL}ob/auth/signout`;
const CONTENT_URL = `${BASE_URL}ob/content/videos`;
const CONTENT_DEL_URL = `${BASE_URL}ob/content/video`;

const login = async (body, errorHandler=() => null) => {
  return post(SIGNIN_URL, body, errorHandler);
}
const logout = async (body, errorHandler=() => null) => {
  return post(SIGNOUT_URL, body, errorHandler);
}
const getVideos = async (errorHandler=() => null) => {
  return get(CONTENT_URL, errorHandler);
}
const saveVideo = async (body, errorHandler=() => null) => {
  return post(CONTENT_URL, body, errorHandler);
}
const deleteVideo = async (id, errorHandler=() => null) => {
  return del(`${CONTENT_DEL_URL}/${id}`, errorHandler);
}

const get = async (urlPath, errorHandler=()=>null, headers=DEFAULT_HEADERS) => {
  try{
    let jwt = localStorage.getItem(KEY);

    let response = await axios.get(`${urlPath}?d=${new Date().getTime()}`, {
      withCredentials:true,
      headers: {...headers, 'Authorization':jwt}
    });

    return response;
  }catch(err){
    console.log(err);

    errorHandler();

    return {status:500, error:err}
  }
}

const post = async (urlPath, body={}, errorHandler=()=>null, headers=DEFAULT_HEADERS) => {
  try{
    let jwt = localStorage.getItem(KEY);
    
    let response = await axios.post(urlPath, body, {
      withCredentials:true,
      headers: {...headers, 'Authorization':jwt}
    });

    return response;
  }catch(err){
    console.log(err);

    errorHandler();

    return {status:500, error:err}
  }
}

const del = async (urlPath, errorHandler=()=>null, headers=DEFAULT_HEADERS) => {
  try{
    let jwt = localStorage.getItem(KEY);
    
    let response = await axios.delete(urlPath, {
      withCredentials:true,
      headers: {...headers, 'Authorization':jwt}
    });

    return response;
  }catch(err){
    console.log(err);

    errorHandler();

    return {status:500, error:err}
  }
}

export {
  KEY,
  login,
  logout,
  getVideos,
  saveVideo,
  deleteVideo,
}