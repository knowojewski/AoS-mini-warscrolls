<template>
  <div class="miniscrolls">
    <div class="row">
      <div class="container">
        <AddingBox />
        <PrintSheet />
      </div>
    </div>
    <div class="row">
      <ScrollsContent />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import ScrollsContent from '../components/scrolls-components/scrolls-component/ScrollsContent';
import AddingBox from '../components/scrolls-components/AddingBox';
import PrintSheet from '../components/scrolls-components/print-component/PrintSheet';

@Component({
  components: {
    ScrollsContent,
    AddingBox,
    PrintSheet
  }
})
export default class Miniscrolls extends Vue {

}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  width: 100%;
  display: flex;
}

</style>