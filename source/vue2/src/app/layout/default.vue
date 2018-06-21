<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "layout.scss";
</style>

<!-- Template -->
<template>
  <div class="layout-container layout-default">
    <div class="layout-header">
      <Navigator></Navigator>
    </div>
    <div class="layout-main clearfix">
      <div class="layout-sidebar sidebar-container" ref="sidebarContainer">
        <Sidebar></Sidebar>
      </div>
      <div class="layout-body body-container" ref="bodyContainer">
        <router-view/>
      </div>
    </div>
    <!--<div class="layout-footer">-->
    <!--<Footer></Footer>-->
    <!--</div>-->
  </div>
</template>

<!-- Script -->
<script>
  import {mapGetters} from 'vuex';
  import PerfectScrollbar from 'perfect-scrollbar';
  import Navigator from '../components/navigator/index';
  import Sidebar from '../components/sidebar/index';
  import Footer from '../components/footer/index';

  const _DefaultLayout = {
    name: 'DefaultLayout',
    created: function () {
    },
    updated: function () {
    },
    mounted: function () {
      const sidebarContainer = this.$refs.sidebarContainer;
      const bodyContainer = this.$refs.bodyContainer;
      new PerfectScrollbar(sidebarContainer);
      new PerfectScrollbar(bodyContainer);
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
  export default _DefaultLayout;
</script>


