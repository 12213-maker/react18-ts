import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface HYInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}


//继承的时候添加一个interceptor的属性
export interface HYRequestConfig
<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>
}
