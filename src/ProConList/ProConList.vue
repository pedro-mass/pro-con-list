<style scoped>
  #app {
    background-color: lightblue;
  }
</style>

<template>
  <div id="app" class="container-fluid procon-list">
    <h1 class="text-center">{{ title }}</h1>
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <div class="form-group">
          <input class="form-control" placeholder="Enter a pro/con" v-model="input" @keyup.enter="processInput"></input>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-6" style="background-color:greenyellow">
        <list :items="pros" title="PROS" :isProList="true" :onDeleteItem="onDeleteItem" :onEditItem="onEditItem"></list>
      </div>

      <div class="col-xs-6" style="background-color:gold">
        <list :items="cons" title="CONS" :isProList="false" :onDeleteItem="onDeleteItem" :onEditItem="onEditItem"></list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'pro-con-list',
  components: {
    List,
  },
  props: {
    title: String,
    items: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    onAddItem: {
      type: Function,
    },
    onEditItem: {
      type: Function,
    },
    onDeleteItem: {
      type: Function,
    },
  },
  computed: {
    pros() {
      return this.items.filter( item => item.pro === true);
    },
    cons() {
      return this.items.filter( item => item.pro != true);
    }
  },
  methods: {
    processInput() {
      this.onAddItem(this.input);

      this.input = '';
    },
  },
}
</script>
