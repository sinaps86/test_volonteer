import Vue from 'vue'
import {BASE_URL} from "./constants"

export default {
    createAccount(data) {

    },

    loginIn(data) {
        return Vue.http.post(BASE_URL + "/accounts/signin/", data);
    },

    logOut() {
        return Vue.http.get(BASE_URL + "/accounts/signet/");
    },

    resetPassword() {

    },

    createNewPassword(data) {

    }
}
