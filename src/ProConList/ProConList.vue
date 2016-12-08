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
          <input class="form-control"  placeholder="Enter a pro/con" v-model="input" @keyup.enter="processItem"></input>
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
  name: 'app',
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
    }
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
    processInput(input) {
      // check to see if it has one of our keys
      let indicator = input.trim().substring(0, 1);

      let item = {};
      item.pro = indicator === '+';

      // check to see if we got a valid indicator
      if (!_.includes(this.validIndicators, indicator)) {
          item.value = input.trim();
      } else {
        item.value = input.trim().substring(1).trim();
      }

      // needed to have Vue be able to swap into edit mode
      item.isEditing = false;

      return item;
    },
    processItem(event) {
      let newItem = this.processInput(this.input);

      this.items.push(newItem);

      // clear out the input
      this.input = '';
    },
    onDeleteItem(item) {
      let index = this.items.findIndex(a => {
        return _.isEqual(a, item);
      });

      if (index >= 0) {
          this.items.splice(index, 1);
      }
    },
    onEditItem(item) {
      // handle the editText
      let editItem = this.processInput(item.editText);

      // update the object text
      _.assignIn(item, editItem);
      item.isEditing = false;
      item.editText = '';

      // return the result
      return item;
    }
  },
}
</script>
