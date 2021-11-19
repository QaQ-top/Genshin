import Axios from 'axios';
import { getHeaders } from '../../crypto';

const apiTakumi = 'https://api-takumi.mihoyo.com';
const baseUrl = 'https://api-takumi.mihoyo.com/game_record/app/genshin/api';

const http = Axios.create({
  baseURL: baseUrl,
});

http.interceptors.request.use((config) => {
  return config;
}, error => {
  Promise.reject(error);
});

http.interceptors.response.use((response) => {
  return response;
}, error => {
  return {
    code: 407,
    message: '代理接口请求失败',
    data: error.response.data
  };
});


type SERVER =
  | 'cn_gf01'
  | 'cn_qd01'
  | 'os_usa'
  | 'os_euro'
  | 'os_asia'
  | 'os_cht'
  | null;

function getServer(uid: string): SERVER {
  const r = Number(uid[0]);
  if (r >= 1 && r <= 4) return 'cn_gf01';
  if (r == 5) return 'cn_qd01';
  if (r == 6) return 'os_usa';
  if (r == 7) return 'os_euro';
  if (r == 8) return 'os_asia';
  if (r == 9) return 'os_cht';
  return null;
}

interface PlayerInfoProps {
  uid: number;
}
export function getPlayerInfo(params: PlayerInfoProps) {
  const { uid } = params;
  return http({
    method: 'get',
    params: {
      server: getServer(String(uid)),
      role_id: uid,
    },
    headers: getHeaders({ cookie: '', crypto: 2, commonUA: 2111 }),
  });
}
