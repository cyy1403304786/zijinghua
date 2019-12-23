<template>
  <div class='page-topbar' v-bind:class='{ sidebar_shift: isCollapse }'>
    <router-link to="/home" class="logo-area">
      <img src="../../assets/image/gg.png" width="135" height="50">
    </router-link>
    <div class='quick-area'>
      <div class='pull-left'>
        <span class="sidebar_toggle" @click="toggleSideBar"><i class="el-icon-s-fold"></i></span>
        <span class="system-center">我的系统</span>
      </div>
      <div class='pull-right'>
        <router-link to="/">
          <i class="iconfont iconnavhome-copy"></i>
          <span>返回首页</span>
        </router-link>
        <router-link to="/">
          <i class="iconfont iconzhongzhimima"></i>
          <span>重置密码</span>
        </router-link>
        <a href="javascript:void(0)" @click="logout">
          <i class="iconfont icontuichu3"></i>
          <span>退出系统</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 name: 'home',
 components: {
    
  },
 data(){
        return {
            isCollapse:false
        }
 },
  created(){

  },
  computed: {

  },
  methods:{
      toggleSideBar(){

      },
      logout(){

      }
  }
}
</script>

<style lang="scss">
  .page-topbar{
    box-shadow: 0px 3px 5px 0px 
    rgba(47, 47, 47, 0.21);
    z-index: 1001;
    background-color: #383d40;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    .logo-area {
      position: relative;
      width: 200px;
      min-height: 50px;
      transition: all 0.3s linear;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 112px;
        height: 31px;
      }
    }
    .quick-area{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pull-left {
        font-size: 18px;
        color: #fff;
        display: flex;
        align-items: center;
        line-height: 50px;
        .sidebar_toggle{
          padding-right: 10px;
          cursor: pointer;
          i{
            font-size: 20px;
          }
        }
      }
      .pull-right{
        font-size: 14px;
        color: #fff;
        padding-right: 15px;
        display: flex;
        align-items: center;
        .company-name {
          font-size: 16px;
        }
        a {
          color: #fff;
          margin-left: 30px;
          text-decoration: none;
          &:hover {
            span {
              text-decoration: underline;
            }
          }
        }
        .el-dropdown{
          margin-left: 30px;
          cursor: pointer;
        }
        i{
          margin-right: 5px;
        }
      }
    }
    &.sidebar_shift{
      .pull-left{
        height: 50px;
        .sidebar_toggle{
          width: 50px;
          padding: 0;
          text-align: center;
        }
      }
      .logo-area {
        width: 60px;
        background-image: url('../../assets/image/gg.png');
        background-repeat: no-repeat;
        background-position: right top;
        img{
          display: none;
        }
      }
    }
  }
  .lang-drop-list{
    .el-dropdown-menu__item{
      display: flex;
      align-items: center;
      img{
        width: 20px;
        margin-right: 10px;
      }
    }
  }
</style>

