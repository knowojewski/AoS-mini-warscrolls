<template>
    <div class="scrolls-box">
        <div class="box-top">
            <h4 class="title">Your warscrolls</h4>
            <img class="title-bg" src="../../../assets/your-scrolls/top-bg.png" alt="Top background">
        </div>
        <div class="box-content">
            <img class="bottom-line" src="../../../assets/your-scrolls/bottom-line.png" alt="Bottom-line">
            <img class="side-line left-line" src="../../../assets/your-scrolls/side-line.png" alt="Left line">
            <img class="side-line right-line" src="../../../assets/your-scrolls/side-line.png" alt="Right line">
            <div class="box-middle">
                <WarscrollComponent 
                    v-for="miniscroll in getMiniscrolls" 
                    :key="miniscroll.id" 
                    :miniscroll="miniscroll"
                    component="scrollsContent"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import WarscrollComponent from '../../WarscrollComponent';

@Component({
  components: {
    WarscrollComponent
  }
})
export default class ScrollsContent extends Vue {
@Action openAddingBox;
@Getter getMiniscrolls;

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
            padding-left: 30px;
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

        .box-middle {
            max-height: 750px;
            background: #fff;
            margin: 0 8px 0 8px;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            overflow-y: scroll;
        }

        .box-middle::-webkit-scrollbar {
            background: #ffffff;
            width: 40px;
        }

        .box-middle::-webkit-scrollbar-button:single-button {
            display: block;
            width: 40px;
            height: 60px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }

        .box-middle::-webkit-scrollbar-button:single-button:vertical:decrement {
            background-image: url('../../../assets/arrow-up.png');
        }

        .box-middle::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
            background-position: 50% 10%;
        }

        .box-middle::-webkit-scrollbar-button:single-button:vertical:increment {
            background-image: url('../../../assets/arrow-down.png');
            height: 80px;
        }

        .box-middle::-webkit-scrollbar-button:single-button:vertical:increment:hover {
            background-position: 50% 80%;
        }
    }
}

@media print {
    .scrolls-box {
        display: none;
    }
}
</style>