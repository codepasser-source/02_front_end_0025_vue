<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "in";
</style>
<!-- Template -->
<template>
  <div class="view-container container">
    <div class="row">
      <div class="sign-in-card col-sm-8">
        <b-card title="Card Title"
                img-src="https://lorempixel.com/600/300/food/5/"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="sign-in-form col-sm-4">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="needs-validation" novalidate>
          <div class="form-group">
            <label for="emailInput">Email address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="Email address" v-model="signForm.email" required>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please input email address.
            </div>
          </div>
          <div class="form-group">
            <label for="passwordInput">Your password</label>
            <input type="text" class="form-control" id="passwordInput" placeholder="Your address" v-model="signForm.password" required>
            <div class="valid-feedback">
              Looks good!
            </div>
            <div class="invalid-feedback">
              Please input your password.
            </div>
          </div>
          <b-button type="submit" variant="primary">Sign In</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>
<!-- Script -->
<script>
  import {mapGetters} from 'vuex';

  const _SignIn = {
    name: 'SignIn',
    created: function () {
    },
    updated: function () {
    },
    mounted: function () {
    },
    activated: function () {
    },
    data: function () {
      return {
        show: true,
        signForm: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.signForm));
      },
      onReset(evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.signForm.email = '';
        this.signForm.password = '';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        });
      }
    },
    components: {},
    computed: {
      ...mapGetters([])
    }
  };

  export default _SignIn;
</script>


