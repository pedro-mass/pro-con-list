<style scoped>
  #app {
    background-color: lightblue;
  }
</style>

<template>
  <div id="app" class="container-fluid">
    <pro-con-list title="Pro/Con List" :items="items"></pro-con-list>
  </div>
</template>

<script>
import ProConList from './ProConList/ProConList.vue'

export default {
  name: 'app',
  components: {
    ProConList,
  },
  data () {
    return {
      items: [
        { pro:true, value:'pedro', isEditing: false },
        { pro:false, value:'dario', isEditing: false },
        { pro:true, value:'xavier', isEditing: false },
        { pro:false, value:'juan', isEditing: false },
        { pro:true, value:'talmas', isEditing: false },
        { pro:false, value:'mass', isEditing: false },
      ]
    }
  },
  methods: {
    // TODO: add methods for ADD, EDIT, DELETE
    // pass those methods down to the pro-con list
  },
}
</script>
