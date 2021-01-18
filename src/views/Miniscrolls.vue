<template>
  <div class="miniscrolls">
    <div class="row">
      <div class="container" :class="{'dark-bg': getEditMode}">
        <AddingBox />
        <PrintSheet v-if="!getEditMode" />
        <!-- <WarscrollComponent v-else :miniscroll="getScrollToEdit" /> -->
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
import WarscrollComponent from '../components/WarscrollComponent';
import { Getter } from 'vuex-class';

@Component({
  components: {
    ScrollsContent,
    AddingBox,
    PrintSheet,
    WarscrollComponent
  }
})
export default class Miniscrolls extends Vue {
  @Getter getMiniscrolls;
  @Getter getEditMode;
  @Getter getScrollToEdit;

}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  width: 100%;
  display: flex;
}

.dark-bg {
  margin-top: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.802);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;

  .adding-box {
    margin-right: 40px;
  }
}

</style>