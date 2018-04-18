import {richInput} from "../../../assets/scripts/staff";
import account_api from "../../../api/accounts"

export default {
    name: 'volonteer-login',

    data: function () {
        return {
          login:  new richInput({
            title: "E-mail или телефон",
            placeholder: "iwannahelp322@mail.com"
          }),
          password: new richInput({
            title: "Пароль",
            type: "password",
            placeholder: "password1234"
          }),
        }
    },
    components: {

    },

    created() {

    },

    mounted() {
      console.warn()
    },

    methods: {
      inputtingLogin(event) {
        this.login.value = event.target.value.toLowerCase();
      },

      inputtingPassword(event) {
        this.password.value = event.target.value;
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

      goToRegistration() {
        this.$router.push({name: "v_registration"})
      },

      logInHandler() {
        if (!this.isProcessing) {
          this.isProcessing = true;
          this.logIn(this.getActualUserDate());
        }
      },

      logIn(data) {
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
