import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir);
};
const alias: Record<string, string> = {
  '@': pathResolve('./src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 5555, // 端口
    // proxy: {
    //     '/api': { // 请求接口中要替换的标识
    //         target: 'http://117.62.22.235:17009', // 代理地址
    //         changeOrigin: true, // 是否允许跨域
    //         secure: true,
    //         rewrite: (path) => path.replace(/^\/api/, '') // api标志替换为''
    //     }
    // }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // mock服务
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: './src/mock/',
    }),
  ],
  resolve: {
    alias,
  },
});
