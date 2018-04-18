export default {
	name: 'app',

  data() {
    return {

    }
  },

  mounted() {
	  window.addEventListener("resize", this.resizer);
	  this.$store.commit("setWidth", window.innerWidth);
	  this.$store.commit("setHeight", window.innerHeight);
  },

  methods: {
	  resizer() {
      this.$store.commit("setWidth", window.innerWidth);
      this.$store.commit("setHeight", window.innerHeight);
    }
  }
}
