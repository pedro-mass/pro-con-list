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
      ],
      validIndicators: {
        pro: '+',
        con: '-'
      },
    }
  },
  methods: {
    // TODO: add methods for ADD, EDIT, DELETE
    // pass those methods down to the pro-con list
    onAddItem(inputString) {
      let newItem = this.processInput(inputString);

      this.items.push(newItem);
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
      item.editText = '';

      // return the result
      return item;
    },
    onDeleteItem(item) {
      let index = this.items.findIndex(a => {
        return _.isEqual(a, item);
      });

      if (index >= 0) {
          this.items.splice(index, 1);
      }
    },
  },
}
</script>
