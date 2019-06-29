import { AppEntity } from '../entity-types';

const appDatas: AppEntity[] = [
  {
    appName: 'Test',
    apiBase: '',
    appId: '10000',
    loadBalanceMode: 'polling', // iphash, polling
    enableCors: true,
    apiHosts: [
      { protocol: 'http', host: 'www.baidu.com', port: 80 },
      { protocol: 'https', host: 'github.com', port: 443 }
    ]
  }
];

export const demoData = appDatas.reduce((result: any, app) => {
  result[app.appId] = app;
  return result;
}, {});