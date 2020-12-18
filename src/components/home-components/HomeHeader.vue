<template>
    <div class="home-header">
        <svg class="bg-dark-triangle" viewBox="0 0 1436 545" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1435.5 0H0V544.5L1435.5 0Z" fill="#3B3D3C"/>
        </svg>
        <svg class="bg-lighter-triangle" viewBox="0 0 1920 723" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 506.5V0H1920V722.5L0 506.5Z" fill="#665F55"/>
        </svg>
        <div class="home-title">
        <h1 class="title">Mini Warscrolls</h1>
        <p class="title-text">Make your battles simplier and more enjoyable.</p>
        </div>
        <HammerAnimation v-show="animationShow" />
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import HammerAnimation from './HammerAnimation'

@Component({
    components: {
        HammerAnimation
    }
})
export default class HomeHeader extends Vue {
    animationShow = false;

    created() {
        setTimeout((() => this.animationShow = true), 2500);
    }
}
</script>

<style lang="scss" scoped>
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.home-header {
    position: relative;
    width: 100%;
    height: 630px;

    .bg-dark-triangle {
        position: absolute;
        width: 80%;
        z-index: 1;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        animation: dark-triangle-anim .8s ease forwards .8s;
    }

    .bg-lighter-triangle {
        position: absolute;
        width: 100%;
        z-index: 0;
        right: 0;
        top: 0;
        animation: light-triangle-anim 1s ease;
    }

    .home-title {
        position: absolute;
        top: 190px;
        left: 15%;
        color: #f5f5f5;
        z-index: 2;

        .title {
            position: relative;;
            font-size: 46px;
            font-weight: 300;
            padding-bottom: 10px;
            margin-bottom: 10px;
            opacity: 0;
            animation: fade-in-top .8s ease forwards 1.6s;
        }

        .title::after {
            position: absolute;
            content: '';
            width: 70%;      
            height: 5px;
            background: $yellow;
            bottom: 0;
            left: -20%;
            opacity: 0;
            animation: fade-in-left .8s ease forwards 2s;
        }

        .title-text {
            font-size: 30px;
            font-weight: 300;
            opacity: 0;
            animation: fade-in-right .8s ease forwards 2.2s;
        }
    }
}
</style>