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
</style>

<template>
  <div>
    <p class="list-title">{{ this.title }}</p>
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <ul :class="listStyleClass">
          <li v-for="item in items">
            {{ item.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'proConList',
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
    title: String
  },
  computed: {
    listStyleClass: function() {
      if (this.isProList)
        return 'pro-list';
      else
        return 'con-list';
    }
  }
}

</script>
