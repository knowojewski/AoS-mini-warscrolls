<template>
  <div class="home">
    <HomeHeader />
    <HomeContent />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import HomeHeader from '../components/home-components/HomeHeader'
import HomeContent from '../components/home-components/HomeContent'

@Component({
  components: {
    HomeHeader,
    HomeContent
  }
}) 
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.home {
  width: 100%;
  background: #F3F3F3;
}
</style>