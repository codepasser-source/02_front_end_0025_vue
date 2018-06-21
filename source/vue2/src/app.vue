<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "style/app.scss";
</style>
<!-- Template -->
<template>
  <div class="app-container">
    <router-view/>
  </div>
</template>
<!-- Script -->
<script>
  import {mapGetters} from 'vuex';

  const _App = {
    name: 'App',
    created: function () {
    },
    updated: function () {
    },
    mounted: function () {
    },
    activated: function () {
    },
    data: function () {
      return {};
    },
    methods: {},
    components: {},
    computed: {
      ...mapGetters([])
    }
  };
  export default _App;
</script>


