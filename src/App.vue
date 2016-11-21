<template>
  <div id="app" class="container-fluid">
    <h1 class="text-center">Pro/Con List</h1>
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <div class="form-group">
          <textarea class="form-control" placeholder="Enter a pro/con" rows="1"></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-6" style="background-color:greenyellow">
        <p class="list-title">PROS</p>
        <div class="row">
          <div class="col-md-offset-3 col-md-6">
            <ul class="procon-list pro-list">
              <li>something</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6" style="background-color:gold">
        <p class="list-title">CONS</p>
        <div class="row">
          <div class="col-md-offset-3 col-md-6">
            <ul class="procon-list con-list">
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #app {
    background-color: lightblue;
  }

  .full-width {
    width: 100%;
  }

  .list-title {
    text-align: center;
    font-weight: bold;
  }

  .procon-list {
    list-style: none; /* Remove list bullets */
  }

  ul.con-list li:before, ul.pro-list li:before {
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
