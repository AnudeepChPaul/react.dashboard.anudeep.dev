import axios from 'axios'

/**
 * Base api class which is going to return all the base axios configs
 * @return {import('axios').AxiosInstance}
 * */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Api = () => axios.create({})

/**
 * Base api class which is going to return all the base axios configs
 * @return {import('axios').AxiosInstance}
 * */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthApi = () => axios.create({})