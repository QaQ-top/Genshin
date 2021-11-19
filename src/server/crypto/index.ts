import crypto from 'crypto';
const referer =
  'https://webstatic.mihoyo.com/app/community-game-records/index.html?v=6';
const DynamicSecretProvider = {
  AppVersion: '2.10.1',
  APISalt: '4a8knnbk5pbjqsrudp3dq484m9axoc5g',
};

const DynamicSecretProvider2 = {
  AppVersion: '2.11.1',
  APISalt: 'xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs',
};

const RequestOptions = {
  CommonUA2101: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) miHoYoBBS/2.10.1',
  // 支持更新的DS2算法
  CommonUA2111: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) miHoYoBBS/2.11.1',
  Json: 'application/json',
  Hyperion: 'com.mihoyo.hyperion',
  DeviceId: crypto.randomUUID(),
};

const RequestHeaders = {
  Accept: RequestOptions.Json,
  'x-rpc-app_version': DynamicSecretProvider.AppVersion,
  'User-Agent': RequestOptions.CommonUA2111,
  'x-rpc-client_type': '5',
  Referer: referer,
  'X-Requested-With': RequestOptions.Hyperion,
};

interface GetHeadersParams {
  cookie: string;
  crypto?: 1 | 2;
  commonUA?: 2101 | 2111;
}

export function getHeaders({ cookie, crypto, commonUA }: GetHeadersParams) {
  return {
    ...RequestHeaders,
    'x-rpc-app_version':
      crypto === 1
        ? DynamicSecretProvider.AppVersion
        : DynamicSecretProvider2.AppVersion,
    'User-Agent':
      commonUA === 2101
        ? RequestOptions.CommonUA2101
        : RequestOptions.CommonUA2111,
    Cookie: cookie,
  };
}