<style></style>

<template>
  <div id="auth" class="container-fluid">
    <header-section></header-section>

    <!-- <div id="firebaseui-auth-container"></div> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import HeaderSection from './layout/HeaderSection.vue'

export default {
  name: 'auth',
  components: {
    HeaderSection,
  },
  data() {
    return {}
  },
  created() {
    console.log("state.count: ", this.$store.state.count)

    // FirebaseUI config.
      // var uiConfig = {
      //   signInSuccessUrl: '/pedro',
      //   signInOptions: [
      //     // Leave the lines as is for the providers you want to offer your users.
      //     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //     firebase.auth.EmailAuthProvider.PROVIDER_ID
      //   ],
      //   // Terms of service url.
      //   tosUrl: '/tos'
      // };
      //
      // // Initialize the FirebaseUI Widget using Firebase.
      // var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      // ui.start('#firebaseui-auth-container', uiConfig);
  },
  methods: {}
}
</script>
