<template>
  <header class="header">
    <router-link to="/"><Logo /></router-link>
    <ul class="header-links">
      <li class="link"><router-link to="/" exact>Home</router-link></li>
      <li class="link"><router-link to="/miniscrolls" exact>Miniscrolls</router-link></li>
      <li class="link"><router-link to="/minicheats" exact>Minicheats</router-link></li>
    </ul>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Logo from './Logo';

@Component({
  components: {
    Logo
  }
})
export default class HeaderComponent extends Vue {

}
</script>

<style lang="scss" scoped>
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.header {
  position: fixed;
  width: 100%;
  height: 100px;
  background: $dark-grey;
  display: flex;
  align-items: center;
  z-index: 10;

  .header-links {
    margin-left: 400px;
    display: flex;
    list-style: none;

    .link {
      margin-right: 50px;

      a {
        font-size: 20px;
        font-weight: 300;
        text-decoration: none;
        color: #ffffff;
        position: relative;
        padding-bottom: 7px;
        transition: color .3s;
      }

      a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background: $yellow;
        bottom: 0;
        left: 0;
        transition: width .3s;
      }

      .router-link-active {
        color: #c0c0c0;
      }

      a.router-link-active::after {
        width: 100%;
      }
    }

    .link:hover {
      a {
        color: #c0c0c0;
      }

      a::after {
        width: 100%;
      }
    }
  }
}
</style>