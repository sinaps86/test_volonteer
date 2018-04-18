import {richInput} from "../../../assets/scripts/staff";
import account_api from "../../../api/accounts";

export default {
    name: 'volonteer-registration',

    data: function () {
        return {
          login:  new richInput({
            title: "E-mail",
            placeholder: "username"
          }),
          phone:  new richInput({
            title: "Телефон",
            placeholder: "iwannahelp322@mail.com"
          }),
          password: new richInput({
            title: "Пароль",
            type: "password",
            placeholder: "password1234"
          }),
          repeat: new richInput({
            title: "Повторите пароль",
            type: "password",
            placeholder: "password1234"
          }),
        }
    },
    components: {

    },

    methods: {
      inputtingLogin(event) {
        this.login.value = event.target.value.toLowerCase();
      },

      inputtingPhone(event) {

      },

      inputtingPassword(target, $event) {
        target.value = $event.target.value;
      },

      focusing(target) {
        target.placeholder = "";
      },

      blurring(target) {
        target.placeholder = target.placeholder_init;
      },

      getActualUserDate() {
        let data = {

        };
        return data;
      },

      goToLogIn() {
        this.$router.push({name: "v_login"})
      },

      registrationHandler() {
        if (!this.isProcessing) {
          this.isProcessing = true;
          this.logIn(this.getActualUserDate());
        }
      },

      registration(data) {
        account_api.loginIn(data)
          .then(
            response => {
              this.$store.commit("setAuth", true);
              this.$router.push({name: ""});
            },
            reject => {
              let error = String(reject.body.error || reject.body.detail);
              let status = reject.status;
              this.$root.$children[0].errorHandler(reject);
            }
          );
      }
    }
};
