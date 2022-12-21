import axios from 'axios';

// Available US proxies
// 149.28.91.107	10900
// 144.202.60.78	10586
// 192.155.95.228	10755
// 45.77.144.10	    10017

const proxyUrl = '149.28.91.107:10900';

export const API = axios.create({
    baseURL: 'https://search.outdoorsy.com/',
    timeout: 1000,
    headers: {
        'X-Forwarded-For': proxyUrl
    }
});
