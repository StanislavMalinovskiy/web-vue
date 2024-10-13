import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Keycloak from "keycloak-js";
import axios from 'axios';

const axiosInstance = axios.create({
    // withCredentials: true,
});

axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://192.168.0.108:8080';

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
app.config.globalProperties.$axios = {...axiosInstance}

let initOptions = {
    url: 'https://auth.uzgps.uz:8443/auth/', realm: 'spring-realm', clientId: 'vue-app', onLoad: 'login-required'
}
let keycloak = new Keycloak(initOptions);
keycloak.init({onLoad: initOptions.onLoad}).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        // console.log('Authenticated');
        setAxiosHeader(keycloak.token)
        // console.log(keycloak.token);
        // console.log(keycloak.tokenParsed);
    }

//Token Refresh
    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.log('Token refreshed' + refreshed);
                setAxiosHeader(keycloak.token)
            } else {
                console.log('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.log('Failed to refresh token');
        });
    }, 6000)

}).catch((e) => {
    console.log("Authenticated Failed");
    console.log(e);
});

function setAxiosHeader(accessToken) {
    // console.log('setAxiosHeader')
    // Request interceptor for API calls
    axiosInstance.interceptors.request.use(
        async config => {
            config.headers = {
                Authorization: `Bearer ${accessToken}`
            }
            // console.log(config)
            return config
        },
        error => {
            Promise.reject(error)
        },
    )
}
