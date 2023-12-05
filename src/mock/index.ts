import { MockMethod } from 'vite-plugin-mock';

const mock: Array<MockMethod> = [
  {
    url: '/api/test',
    method: 'post',
    response: () => {
      return {
        status: 200,
        message: 'success',
        data: {
          text: '这里是test,Hello World',
          dataList: [1, 2, 4],
        },
      };
    },
  },
  {
    url: '/api/about',
    method: 'post',
    response: () => {
      return {
        status: 200,
        message: 'success',
        data: {
          text: '这里是关于我们',
        },
      };
    },
  },
];

export default mock;
