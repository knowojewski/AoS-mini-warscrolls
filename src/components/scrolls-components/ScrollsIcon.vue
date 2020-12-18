<template>
  <svg class="scrolls-icon" width="79" height="45" viewBox="0 0 79 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="middle-card" d="M46.8162 24.8088L40.7491 1.80895C40.5007 0.867537 39.5362 0.30568 38.5948 0.554008L27.5611 3.46438C26.6197 3.71271 26.0578 4.67718 26.3062 5.6186L32.3733 28.6185C32.6217 29.5599 33.5862 30.1217 34.5276 29.8734L45.5612 26.963C46.5027 26.7147 47.0646 25.7502 46.8162 24.8088Z" fill="#DCDCDC"/>
        <path class="left-card" d="M41.261 19.5811L12.7121 0.963005C11.8966 0.431152 10.8043 0.661103 10.2724 1.47662L0.963042 15.7506C0.431172 16.5661 0.66113 17.6583 1.47667 18.1902L30.0255 36.8083C30.8411 37.3401 31.9334 37.1102 32.4652 36.2947L41.7746 22.0207C42.3065 21.2052 42.0765 20.1129 41.261 19.5811Z" fill="white"/>
        <path class="right-card" d="M69.8337 16.5883L44.5067 27.9645C43.6186 28.3635 43.222 29.4069 43.621 30.295L49.1879 42.6879C49.5869 43.576 50.6303 43.9726 51.5184 43.5736L76.8454 32.1974C77.7336 31.7985 78.1302 30.7551 77.7312 29.867L72.1643 17.4741C71.7653 16.586 70.7219 16.1894 69.8337 16.5883Z" fill="white"/>
    </svg>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ScrollsIcon extends Vue {}
</script>

<style lang="scss" scoped>
.scrolls-icon {
    margin-right: 12px;
    opacity: 0;
    animation: fade-in .5s ease forwards 1.8s;
    overflow: visible;

    .left-card {
        transform-origin: bottom;
        transform: rotateZ(50deg);
        animation: left-anim 1s ease forwards 2s;
    }

    .middle-card {
        transform-origin: bottom;
        transform: rotateZ(10deg) translateY(10px);
        animation: middle-anim 1s ease forwards 2s;
    }

    .right-card {
        transform-origin: bottom;
        transform: rotateZ(-80deg) translateY(10px);
        animation: right-anim 1s ease forwards 2s;
    }
}

@keyframes right-anim {
    0% {
        transform: rotateZ(-80deg) translateY(10px);
    }

    100% {
        transform: rotateZ(0) translateY(0);
    }
}

@keyframes middle-anim {
    0% {
        transform: rotateZ(10deg) translateY(10px);
    }

    100% {
        transform: rotateZ(0) translateY(0);
    }
}

@keyframes left-anim {
    0% {
        transform: rotateZ(50deg);
    }

    100% {
        transform: rotateZ(0);
    }
}
</style>