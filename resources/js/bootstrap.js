import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
if (import.meta.env.VITE_APP_URL?.startsWith('https')) {
    window.axios.defaults.baseURL = import.meta.env.VITE_APP_URL;
}
