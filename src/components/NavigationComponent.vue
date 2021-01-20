<template>
  <nav class="nav">
    <router-link class="nav-logo" to="/">
      <img src="../assets/navigation/LOGO.png" alt="Logo image">
    </router-link>
    <ul class="nav-links">
      <li class="link-box">
        <router-link class="link" to="/miniscrolls" exact>
          Warscroll Creator
          <img class="link-bg" src="../assets/navigation/link-bg.png" alt="Link background">
        </router-link>
        <img class="link-icon" src="../assets/navigation/nav-icon.png" alt="Nav icon">
      </li>
      <li class="link-box">
        <router-link class="link" to="/minicheats" exact>
          Minicheats Creator
          <img class="link-bg" src="../assets/navigation/link-bg.png" alt="Link background">
        </router-link>
        <img class="link-icon" src="../assets/navigation/nav-icon.png" alt="Nav icon">
      </li>
    </ul>
    <img class="nav-image" src="../assets/navigation/nav-image.png" alt="Header image">
    <img class="nav-line" src="../assets/navigation/nav-line.png" alt="Header line">
  </nav>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NavigationComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.nav {
  width: 270px;
  height: 100vh;
  position: fixed;
  padding: 10px;
  background: #e1e1e1;
  top: 0;
  left: 0;
  z-index: 10;

  .nav-logo {
    text-decoration: none;
    width: 100%;
    
    img { width: 100%; }
  }

  .nav-links {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    
    .link-box {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 20px;

      .link-icon {
        position: absolute;
        left: 0px;
        width: 25px;
        opacity: 0;
        transition: opacity .3s;
      }

      .link {
        position: relative;
        width: 80%;
        text-align: center;
        text-decoration: none;
        color: #ffffff;
        font-weight: 500;
        font-size: 17px;
        transition: color .3s;
        
        .link-bg {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
      } 

      .link:hover { color: #c2c2c2; }
      .link:hover~.link-icon { opacity: .5; }
      .router-link-active{ color: #ff5372; }
      .router-link-active:hover{ color: #ff5372; }
      .router-link-active:hover~.link-icon{ opacity: 1; }
      .router-link-active~.link-icon{ opacity: 1; }
    }
  }

  .nav-image {
    width: 680px;
    max-width: 680px;
    position: absolute;
    bottom: -4px;
    left: 0;
  } 

  .nav-line {
    max-height: 640px;
    position: absolute;
    right: 0;
    top: 0;
  }
}

@media print {
  .nav {
    display: none;
  }
}
</style>