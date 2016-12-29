<style scoped>
  #app {
    background-color: lightblue;
  }
</style>

<template>
  <div id="app" class="container-fluid">
    <pro-con-list title="Pro/Con List" :items="items"
      :onAddItem="onAddItem" :onEditItem="onEditItem" :onDeleteItem="onDeleteItem">
    </pro-con-list>
  </div>
</template>

<script>
import ProConList from './ProConList/ProConList.vue';
import firebaseApp from '../db/firebaseApp.js'

export default {
  name: 'app',
  components: {
    ProConList,
  },
  firebase: {
    items: firebaseApp.database().ref('items'),
  },
  data() {
    return {
      validIndicators: {
        pro: '+',
        con: '-'
      },
    }
  },
  methods: {
    onAddItem(inputString) {
      let newItem = this.processInput(inputString);

      this.$firebaseRefs.items.push(newItem)
    },
    processInput(input) {
      // check to see if it has one of our keys
      let indicator = input.trim().substring(0, 1);

      let item = {};
      item.pro = indicator === this.validIndicators.pro;

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
    onEditItem(item) {
      // handle the editText
      let editItem = this.processInput(item.editText);

      // update the object text
      _.assignIn(item, editItem);
      item.isEditing = false;
      delete item.editText;

      //--- update the db ---//
      // save the key
      let key = item['.key'];
      delete item['.key'];

      // update using the key
      this.$firebaseRefs.items.child(key).set(item);

      // put the key back on for further updates
      item['.key'] = key;

      // return the result
      return item;

    },
    onDeleteItem(item) {
      // update db
      this.$firebaseRefs.items.child(item['.key']).remove();
    },
  },
}
</script>
