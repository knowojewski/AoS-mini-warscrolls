<template>
  <div id="app">
    <NavigationComponent />
    <router-view></router-view>
    <MessageModal />
    <AskModal />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import NavigationComponent from './components/NavigationComponent';
import MessageModal from './components/modals/MessageModal';
import AskModal from './components/modals/AskModal';

@Component({
  components: {
    NavigationComponent,
    MessageModal,
    AskModal
  }
})
export default class App extends Vue {
  @Action loadScrollsFromLocal;

  created() {
    this.loadScrollsFromLocal();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

*, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html.edit-mode {
  overflow: hidden;
}

body {
  font-family: 'Lora', serif;
  background-color: #e1e1e1;
}

#app{
  margin-left: 270px;
  margin-bottom: 300px;
}

.btn-box {
  width: 250px;
  height: 37px;
  max-width: 250px;
  padding: 4px;
  border: none;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .btn-bg {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 0;
    transition: background .3s;
  }

  .btn {
    position: absolute;
    font-family: 'Lora', serif;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    background: transparent;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    cursor: pointer;
    z-index: 2;
  }

  .btn:hover~.btn-bg {
    background: rgb(204, 204, 204);
  }
}

.row {
  max-width: 1900px;
  margin: 0 auto;
  padding: 0 20px;
}

@keyframes dark-triangle-anim {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes light-triangle-anim {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-top {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  0% {  
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }

}

</style>
