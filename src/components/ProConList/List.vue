<style scoped>
  .list-title {
    text-align: center;
    font-weight: bold;
  }

  ul {
    list-style: none; /* Remove list bullets */
  }

  li:before {
    padding-right: 1em;
    font-family: FontAwesome;
  }

  ul.pro-list li:before {
    content: "\f067";
  }

  ul.con-list li:before {
    content: "\f068";
  }

  li .listItem-actions {
      /*display: none*/
  }

  li:hover .listItem-actions {
      display: inherit;
  }

  .listItem-actions a:hover {
    font-size: 1.25rem;
  }

  input.listItem-edit {
    width:80%;
  }
</style>

<template>
  <div>
    <p class="list-title">{{ this.title }}</p>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <ul :class="listStyleClass">
          <li v-for="item in items" :class="{'listItem-edit': item.isEditing}">
            <span v-show="!item.isEditing">
              {{ item.value }}
              <div class="pull-right listItem-actions">
                <a href="#" @click="editItem(item)">
                  <i class="fa fa-pencil-square-o fa-lg text-info"></i>
                </a>
                <a href="#" @click="deleteItem(item)">
                  <i class="fa fa-trash-o fa-lg text-danger"></i>
                </a>
              </div>
            </span>
            <span v-show="item.isEditing">
              <input class="listItem-edit" v-model="item.editText" @keyup.enter="saveEdit(item)"></input>
              <div class="pull-right listItem-actions">
                <a href="#" @click="saveEdit(item)">
                  <i class="fa fa-floppy-o fa-lg text-success"></i>
                </a>
                <a href="#" @click="cancelEdit(item)">
                  <i class="fa fa-ban fa-lg text-danger"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    items: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    isProList: {
      type: Boolean,
      default: true
    },
    title: String,
    onDeleteItem: {
      type: Function,
    },
    onEditItem: {
      type: Function,
    },
  },
  computed: {
    listStyleClass: function() {
      if (this.isProList)
        return 'pro-list';
      else
        return 'con-list';
    }
  },
  methods: {
    editItem(item) {
      if (item.pro) {
        item.editText = "+ ";
      } else {
        item.editText = "- ";
      }

      item.editText += item.value;
      item.isEditing = true;
    },
    cancelEdit(item) {
      item.isEditing = false;
    },
    saveEdit(item) {
      this.onEditItem(item);
    },
    deleteItem(item) {
      this.onDeleteItem(item);
    }
  }
}

</script>
