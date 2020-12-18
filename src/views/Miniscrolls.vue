<template>
  <div class="miniscrolls">
    <ScrollsHeader />
    <ScrollsContent />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import ScrollsHeader from '../components/scrolls-components/ScrollsHeader';
import ScrollsContent from '../components/scrolls-components/ScrollsContent';

@Component({
  components: {
    ScrollsHeader,
    ScrollsContent
  }
})
export default class Miniscrolls extends Vue {

}
</script>

<style lang="scss">
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

</style>