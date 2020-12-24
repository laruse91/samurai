import {instance} from "./api";

export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
            .then(response => response.data)
    },

};