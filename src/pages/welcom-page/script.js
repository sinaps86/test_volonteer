export default {
    name: 'welcome-page',

    data: function () {
        return {
          header_height: "",
          blocks: {
            left: {active: false},
            right: {active: false}
          }
        }
    },
    components: {

    },

    created() {

    },

    computed: {
      //Получение высоты для хедера и/или блока с контентом
      getHeight() {
        let height = this.$store.state.height || 300;
        return height / 2;
      },

      getPadding() {
        let height = (this.$store.state.height || 300) / 2;
        console.warn("Padding" + (height / 17));
        return height / 17;
      }
    },

    methods: {
      //Имитация поведения ховера
      hover(who) {
        switch (who) {
          case "left":
            this.blocks.left.active = true;
            break;
          case "right":
            this.blocks.right.active = true;
            break;
        }
      },

      //Имитация поведения ховера
      blur(who) {
        switch (who) {
          case "left":
            this.blocks.left.active = false;
            break;
          case "right":
            this.blocks.right.active = false;
            break;
        }
      },

      //Переадресация на нужную страницу
      goTo(path) {
        this.$router.push({name: path});
      }
    },


};
