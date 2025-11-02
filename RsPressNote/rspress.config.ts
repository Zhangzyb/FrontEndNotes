import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Z的记录',
  lang: 'zh-CN',
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: '前端基础',
          items: [
            {
              text: 'HTML',
              link: 'html'
            },
            {
              text: 'CSS',
              link: 'css'
            },
            {
              text: 'JavaScript',
              link: 'javascript'
            }
          ]
        }
      ]
    }
  },
});
