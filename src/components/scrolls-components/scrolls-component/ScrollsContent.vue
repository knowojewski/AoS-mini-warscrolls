<template>
    <div class="scrolls-box">
        <div class="box-top">
            <h4 class="title">Your miniscrolls</h4>
            <img class="title-bg" src="../../../assets/your-scrolls/top-bg.png" alt="Top background">
        </div>
        <div class="box-content">
            <img class="bottom-line" src="../../../assets/your-scrolls/bottom-line.png" alt="Bottom-line">
            <img class="side-line left-line" src="../../../assets/your-scrolls/side-line.png" alt="Left line">
            <img class="side-line right-line" src="../../../assets/your-scrolls/side-line.png" alt="Right line">
            <ContentMiddle />
        </div>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import ContentMiddle from './ContentMiddle';

@Component({
  components: {
    ContentMiddle
  }
})
export default class ScrollsContent extends Vue {
@Action openAddingBox;

}
</script>

<style lang="scss">
.scrolls-box {
    position: relative;
    width: 100%;
    z-index: 11;

    .box-top {
        position: relative;
        width: 100%;
        height: 50px;
        z-index: 1;

        .title-bg {
            position: absolute;
            width: 100.5%;
            height: 100%;
            top: 0;
            left: -.25%;
            z-index: -1;
        }

        .title {
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            padding: 12px 0 0 30px;
            text-transform: uppercase;
        }
    }

    .box-content {
        position: relative;
        background: #fff;
        margin-top: -7px;
        min-height: 280px;
        max-height: 750px;
        overflow: hidden;
        z-index: 0;

        .side-line {
            position: absolute;
            top: 0;
        }

        .left-line { left: -2px; }
        .right-line { right: -2px; }

        .bottom-line {
            position: absolute;
            width: 100%;
            bottom: -2px;
            left: 0;
            z-index: 1;
        }
    }
}

</style>