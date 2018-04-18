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
      getContentHeight() {

      }
    },

    methods: {
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

      blur(who) {
        switch (who) {
          case "left":
            this.blocks.left.active = false;
            break;
          case "right":
            this.blocks.right.active = false;
            break;
        }
      }
    }
};
