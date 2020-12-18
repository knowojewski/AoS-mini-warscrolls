<template>
  <div class="box-middle">
      Middle content
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ContentMiddle extends Vue {

}
</script>

<style lang="scss">
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.box-middle {
    border-left: 2px solid $dark-grey;
    border-right: 2px solid $dark-grey;
    height: 300px;
}

</style>