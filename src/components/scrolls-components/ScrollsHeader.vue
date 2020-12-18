<template>
  <header class="scrolls-header">
    <div class="clip-path-bg"></div>
    <div class="row">
        <ScrollsIcon />
        <h2 class="scrolls-title">Miniscrolls</h2>
    </div>
  </header>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import ScrollsIcon from './ScrollsIcon';

@Component({
    components: {
        ScrollsIcon
    }
})
export default class ScrollsHeader extends Vue {

}
</script>
<style lang="scss">
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.scrolls-header {
    position: relative;
    height: 300px;

    .clip-path-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);
        background: $lighter-grey;
        animation: light-triangle-anim 1s ease;
    }

    .row {
        position: relative;
        padding-top: 150px;
        padding-left: 10%;
        display: flex;
        z-index: 1;
    }

    .scrolls-title {
        position: relative;
        font-size: 36px;
        font-weight: 300;
        color: #ffffff;
        padding-bottom: 15px;
        opacity: 0;
        animation: fade-in-top .8s ease forwards 1s;
    }

    .scrolls-title::after {
        position: absolute;
        content: '';
        width: 300px;      
        height: 5px;
        background: $yellow;
        bottom: 0;
        right: 0;
        opacity: 0;
        animation: fade-in-left .8s ease forwards 1.5s;
    }
}
</style>