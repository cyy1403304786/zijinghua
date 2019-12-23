<template>
  <div class="sidebar-wrap">
      
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style lang="scss">
.sidebar-wrap {
  z-index: 200;
  background-color: #3c414f;
  width: 200px;
  min-width: 200px;
  transition: all 0.3s linear;
  overflow: hidden;
  position: relative;
  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    height: 95px;
    transition: all 0.3s linear;
    .profile-image {
      position: relative;
      width: 50px;
      height: 50px;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      input {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        color: #fff;
        font-size: 12px;
        border: none;
        outline: none;
        border-radius: 50%;
        background: rgba(0,0,0,.5);
        cursor: pointer;
      }
      &:hover input{
        display: block;
      }
    }
    .profile-details{
      h3{
        font-size: 14px;
        margin: 0;
        a{
          color: #ccc;
        }
      }
    }
    .profile-role{
      text-align: center;
    }
  }
  .el-menu{
    background-color: #3c414f;
    border: 0;
    .el-submenu__title,
    .el-menu-item{
      color: #fff;
      line-height: 32px;
      height: 32px;
      .el-tooltip i,
      &>i{
        color: #99b9ff;
        transition: border-color .3s,background-color .3s,color .3s;
      }
      .el-submenu__icon-arrow{
        color: #999;
      }
      &:hover {
        background-color: #5183f041;
        color: #fff;
        .el-tooltip{
          background-color: #5183f041;
          i{
            color: #fff;
          }
        }
        &>i{
          color: #fff;
        }
      }
      &.is-active {
        background-color: #5183f0;
        color: #fff;
        .el-tooltip{
          background-color: #5183f0;
          i{
            color: #fff;
          }
        }
        &>i{
          color: #fff;
        }
      }
    }
    .el-submenu.is-active{
      .el-submenu__title{
        .el-submenu__icon-arrow{
          color: #fff;
        }
      }
    }
  }
  &.collapseit{
    width: 60px;
    min-width: 60px;
    .el-menu{
      .sub-menu {
        display: none;
        li:hover {
          background: transparent;
        }
      }
      li {
        position: relative;
        &:hover {
          background: rgba(33,33,33,0.1);
        }
        .title,.arrow {
          display: none;
        }
      }
      .el-submenu__title,
      .el-menu-item{
        &.is-active{
          background-color: #5183f0;
          color: #fff;
          &>i{
            color: #fff;
          }
        }
      }
    }
    .profile-info {
      width: 60px;
      margin: 0;
      padding: 10px 0 25px 0px;
      .profile-image {
        width: 40px;
        height: 40px;
        padding: 0;
        text-align: center;
        img {
          height: 40px;
          width: 40px;
        }
        input{
          width: 40px;
          height: 40px;
          top: 0;
          right: 0;
        }
      }
    }
    .profile-role,
    .profile-details {
      display: none;
    }
  }
}
.el-menu--vertical{
  .el-menu--popup{
    background-color: #3c414f;
    .el-menu-item{
      line-height: 32px;
      height: 32px;
      color: rgba(255, 255, 255, 0.705);
      &:hover{
        background-color: #5183f041;
        color: #fff;
      }
    }
  }
}
</style>