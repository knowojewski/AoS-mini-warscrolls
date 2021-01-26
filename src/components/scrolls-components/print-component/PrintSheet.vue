<template>
  <div class="print-sheet">
    <div class="print-top">
      <h2 class="top-title">WARSCROLLS SHEET PREVIEW</h2>
      <img class="top-bg" src="../../../assets/miniscrolls/top-bg.png" alt="Top background">
    </div>
    <div class="print-content">
      <div class="print-box">
        <div class="print-view">
          <WarscrollComponent 
            v-for="miniscroll in getScrollsToPrint" 
            :key="miniscroll.printId" 
            :miniscroll="miniscroll"
            component="printSheet"
          />
        </div>
      </div>
    </div>
    <div class="btn-box">
      <img src="../../../assets/button-border.png" alt="Button border">
      <button @click="printScrolls" class="btn operation-box__btn">Print Warscrolls</button>
      <div class="btn-bg"></div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import WarscrollComponent from '../../WarscrollComponent';
import VueHtml2pdf from 'vue-html2pdf';

@Component({
  components: {
    WarscrollComponent,
    VueHtml2pdf
  }
})
export default class PrintSheet extends Vue {
  @Getter getScrollsToPrint;

  printScrolls() {
    window.print();
  }
}
</script>

<style lang="scss">
.print-sheet {
  width: 840px;
  max-width: 840px;

  .print-top {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    
    .top-bg {
      position: absolute;
      width: 102%;
      height: 100%;
      top: -5px;
      left: -1%;
      z-index: 0;
    }

    .top-title {
      position: relative;
      color: #F5F5F5;
      font-size: 18px;
      font-weight: 500;
      padding: 0 0 14px 30px;
      text-transform: uppercase;
      z-index: 1;
    }
  }

  .print-content {
    width: 100%;
    margin-bottom: 5px;
    overflow-y: scroll;

    .print-box {
      width: 740px;
      height: 865px;
      margin: 0 auto;
      padding-bottom: 50px;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .print-view {
        align-self: start;
        width: 100%;
        background-color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        padding: 10px;
      }
      
    }
  }

  .print-content::-webkit-scrollbar {
    background: transparent;
    width: 40px;
  }

  .print-content::-webkit-scrollbar-button:single-button {
    display: block;
    width: 40px;
    height: 60px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .print-content::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url('../../../assets/arrow-up.png');
  }

  .print-content::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
    background-position: 50% 10%;
  }

  .print-content::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url('../../../assets/arrow-down.png');
    height: 80px;
  }

  .print-content::-webkit-scrollbar-button:single-button:vertical:increment:hover {
    background-position: 50% 80%;
  }

  .btn-box {
    margin: 0 auto;
  }
}

.pdf-content {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media print {
  .print-sheet {
    .print-top {
      display: none;
    }

    .print-content {
      overflow: hidden;
      margin: 0;

      .print-box {
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;

        .print-view {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          background-color: white;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          margin: 0;
        }
      }
    }

    .btn-box {
      display: none;
    }
  }
}
</style>