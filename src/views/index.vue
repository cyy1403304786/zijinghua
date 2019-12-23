<template>
  <div class="page">
      <TopBar></TopBar>
      <div class="page-container">
        <!-- <Sidebar></Sidebar> -->
        <div class="page-container-content">
            <router-view></router-view>  
        </div>
     </div>
  </div>
</template>

<script>
import TopBar from '../components/common/topBar'
import Sidebar from '../components/common/sidebar'
export default {

  name: 'home',
  components: {
    TopBar,
    Sidebar
  }
}
</script>
<style lang="scss">
.page{
  min-width: 1200px;
  .page-header{
    position: fixed;
    top: 0;
    left: 0;
  }
  .page-container{
    width: 100%;
    display: flex;
    padding-top: 50px;
    .page-container-content{
      flex: 1;
      min-width: 1135px;
      min-height: 100vh;
      padding: 10px;
      &>div{
        background-color: #fff;
        padding: 15px;
      }
    }
  }
}
</style>
