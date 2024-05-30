import {appInfo} from '../constants/AppInfo';
import axiosClient from './AxiosClient';

class AuthAPI {
  HandleAuthentication = async (
    url: string,
    data?: any,
    method?: 'get' | 'post' | 'put' | 'delete',
  ) => {
    return await axiosClient(`${appInfo.BASE_URL}/auth${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const authenticationAPI = new AuthAPI();
export default authenticationAPI;
