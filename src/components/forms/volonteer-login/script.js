import {richInput} from "../../../assets/scripts/staff";

export default {
    name: 'volonteer-login',

    data: function () {
        return {
          login: "",
          password: ""
        }
    },
    components: {

    },

    created() {
      this.login = {
        title: "E-mail или телефон",
        placeholder: "iwannahelp322@mail.com"
      };
      this.password = {
        title: "Пароль",
        type: "password",
        placeholder: "password1234"
      };
      console.warn(this.login);
      console.warn(this.password);
    },

    methods: {
      inputtingLogin(event) {
        this.login.value = event.target.value.toLowerCase();
      },

      inputtingPassword(event) {
        this.login.value = event.target.value;
      },

      focusing(target) {
        target.placeholder = "";
      },

      blurring(target) {
        target.placeholder = "";
      }
    }
};
