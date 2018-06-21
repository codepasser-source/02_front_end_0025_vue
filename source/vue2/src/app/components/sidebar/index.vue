<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<!-- Template -->
<template>
  <div class="sidebar-component">
    <b-list-group>
      <b-list-group-item href="javascript:void(0);" v-b-toggle.accordion1 variant="light" v-bind:to="'/guide/bootstrap'">
        Bootstrap
      </b-list-group-item>
      <!--visible : false-->
      <b-collapse id="accordion1">
        <b-list-group>
          <b-list-group-item href="javascript:void(0);" v-bind:to="'/guide/bootstrap/started'">
            Getting started
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0);" v-bind:to="'/guide/bootstrap/components'">
            Components
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0);" v-bind:to="'/guide/bootstrap/directive'">
            Directive
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0);" v-bind:to="'/guide/bootstrap/reference'">
            Reference
          </b-list-group-item>
          <b-list-group-item href="javascript:void(0);" v-bind:to="'/guide/bootstrap/misc'">
            Misc
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-list-group>
  </div>
</template>

<!-- Script -->
<script>
  import {mapGetters} from 'vuex';

  const _Sidebar = {
    name: 'Sidebar',
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
  export default _Sidebar;
</script>

