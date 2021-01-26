<template>
<div class="ask-bg" :class="{'display': getAskModal.open}">
  <div class="ask-box">
    <div class="ask-top box-top">
        <h2 class="ask-title box-top-title">{{ getAskModal.title }}</h2>
        <img class="top-bg" src="../../assets/miniscrolls/top-bg.png" alt="Top background">
    </div>
    <div class="ask-content">
        <p class="ask-text">{{ getAskModal.content }}</p>
        <div class="btns-box">
            <div class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button @click="cancelAction" class="btn operation-box__btn">Cancel deleting</button>
                <div class="btn-bg"></div>
            </div>
            <div class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button @click="confirmAction" class="btn operation-box__btn">Delete warscroll</button>
                <div class="btn-bg"></div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class AskModal extends Vue {
    @Getter getAskModal;
    @Action closeAskModal;

    confirmAction() {
        this.getAskModal.onConfirm(this.getAskModal.scrollId)
        this.getAskModal.onCancel();
    }

    cancelAction() {
        this.getAskModal.onCancel();
    }
}
</script>

<style lang="scss">
.ask-bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.85);
    z-index: 13;
}

.ask-box {
    width: 700px;
    max-width: 700px;
    background: #fff;

    .ask-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 45px 0 58px 0;

        .ask-text {
            font-size: 20px;
        }

        .btns-box {
            width: 100%;
            position: absolute;
            bottom: -46px;
            display: flex;
            justify-content: space-between;
        }
    }
}

.ask-bg.display {
    display: flex;
}
</style>