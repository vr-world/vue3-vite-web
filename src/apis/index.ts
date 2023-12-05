import request from '../utils/request';

/**
 * 测试接口
 */

// 测试用Hello World
export const TestApi = async () => {
  let { data } = await request({ url: '/api/test', method: 'post' });
  return data.data;
};

// 关于我们
export const AboutApi = async () => {
  let { data } = await request({ url: '/api/about', method: 'post' });
  return data.data;
};
