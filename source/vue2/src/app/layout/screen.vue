<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "layout.scss";
</style>

<!-- Template -->
<template>
  <div class="layout-container layout-screen">
    <div class="layout-header">
      <Navigator></Navigator>
    </div>
    <div class="layout-main clearfix">
      <div class="layout-body body-container">
        <router-view/>
      </div>
    </div>
    <div class="layout-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<!-- Script -->
<script>
  import {mapGetters} from 'vuex';
  import Navigator from '../components/navigator/index';
  import Sidebar from '../components/sidebar/index';
  import Footer from '../components/footer/index';

  const _ScreenLayout = {
    name: 'ScreenLayout',
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
    components: {
      Navigator,
      Sidebar,
      Footer
    },
    computed: {
      ...mapGetters([])
    }
  };
  export default _ScreenLayout;
</script>


