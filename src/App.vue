<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import HeaderComponent from './components/HeaderComponent';

@Component({
  components: {
    HeaderComponent
  }
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600&family=Roboto:wght@100;300;400;500;700&display=swap');
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

*, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.row {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  color: #ffffff;
  background: #E7AC51;
  font-size: 18px;
  height: 50px;
  width: 300px;
  border-radius: 3px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background .3s;

  i {
    font-size: 22px;
    margin-right: 10px;
  }
}

.btn:hover {
  background: #ffcf88;
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
