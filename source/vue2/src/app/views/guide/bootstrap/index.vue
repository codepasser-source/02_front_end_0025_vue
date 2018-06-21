<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "index.scss";
</style>
<!-- Template -->
<template>
  <div class="view-container container">
    <div class="row">
      <div class="col-sm-10">
        <router-view/>
      </div>

      <div class="col-sm-2">
        <div>sidebar</div>
      </div>
    </div>
  </div>
</template>
<!-- Script -->
<script>
  import {mapGetters} from 'vuex';

  const _Bootstrap = {

    name: 'Bootstrap',
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
  export default _Bootstrap;
</script>


