<template>
  <div id="app" class="container-fluid procon-list">
    <h1 class="text-center">Pro/Con List</h1>
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <div class="form-group">
          <input class="form-control"  placeholder="Enter a pro/con" v-model="input" @keyup.enter="processItem"></input>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6" style="background-color:greenyellow">
        <pro-con-list :items="pros" title="PROS" :isProList="true" :onDeleteItem="onDeleteItem"></pro-con-list>
      </div>

      <div class="col-xs-6" style="background-color:gold">
        <pro-con-list :items="cons" title="CONS" :isProList="false" :onDeleteItem="onDeleteItem"></pro-con-list>
      </div>
    </div>
  </div>
</template>

<script>
import ProConList from './ProConList.vue'

export default {
  name: 'app',
  components: {
    ProConList,
  },
  data () {
    return {
      input: '',
      items: [
        { pro:true, value:'pedro' },
        { con:true, value:'dario' },
        { pro:true, value:'xavier' },
        { con:true, value:'juan' },
        { pro:true, value:'talmas' },
        { con:true, value:'mass' },
      ],
    }
  },
  computed: {
    pros() {
      return this.items.filter( item => item.pro === true);
    },
    cons() {
      return this.items.filter( item => item.con === true);
    }
  },
  methods: {
    processItem(event) {
      // check to see if it has one of our keys
      let indicator = this.input.trim().substring(0, 1);

      let item = {};

      switch (indicator) {
        case "+":
          item.pro = true;
          break;
        case "-":
          item.con = true;
          break;
        default:
          return;
      }

      item.value = this.input.trim().substring(1).trim();

      this.items.push(item);

      // clear out the input
      this.input = '';
    },
    onDeleteItem: function(item) {
      let index = this.items.findIndex(a => {
        return _.isEqual(a, item);
      });

      if (index >= 0) {
          this.items.splice(index, 1);
      }
    }
  },
}
</script>

<style scoped>
  #app {
    background-color: lightblue;
  }
</style>
