<template>
  <svg class="animation" viewBox="0 0 342 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="warscroll warscroll-middle" x="256.636" y="101.671" width="46.4789" height="25.4181" rx="3" transform="rotate(91.513 256.636 101.671)" fill="#DCDCDC"/>
        <rect class="warscroll warscroll-top" x="260.784" y="94.0739" width="64" height="35" rx="3" transform="rotate(129.829 260.784 94.0739)" fill="white"/>
        <rect class="warscroll warscroll-bottom" x="238" y="132.818" width="53.2472" height="29.1196" rx="3" transform="rotate(-24.1891 238 132.818)" fill="white"/>
        <path d="M73.5 161H118V188L73.5 161Z" fill="#C4C4C4"/>
        <path d="M341.5 161H257V194.5C296.6 194.5 329.833 172.167 341.5 161Z" fill="#C4C4C4"/>
        <path d="M145 263L171 250H205L232 263H145Z" fill="#C4C4C4"/>
        <rect x="118" y="161" width="139" height="54" fill="#C4C4C4"/>
        <rect x="171" y="215" width="34" height="35" fill="#C4C4C4"/>
        <line class="sparcle sparcle-left sparcle-left-mid" x1="151.588" y1="141.191" x2="162.588" y2="149.191" stroke="#FFD84F" stroke-width="2"/>
        <line class="sparcle sparcle-left sparcle-left-top" x1="163.648" y1="141.238" x2="169.582" y2="146.286" stroke="#FF6712" stroke-width="2"/>
        <line class="sparcle sparcle-right sparcle-right-mid" x1="224.966" y1="142.84" x2="213.543" y2="150.223" stroke="#FF6712" stroke-width="2"/>
        <line class="sparcle sparcle-right sparcle-right-top" x1="213.818" y1="139.589" x2="205.808" y2="150.582" stroke="#FFD84F" stroke-width="2"/>
        <line class="sparcle sparcle-right sparcle-right-bottom" x1="221.169" y1="153.944" x2="208.33" y2="158.436" stroke="#FF3D00" stroke-width="2"/>
        <line class="sparcle sparcle-left sparcle-left-bottom" x1="157.199" y1="154.02" x2="165.367" y2="155.676" stroke="#FF3D00" stroke-width="2"/>

        <line class="sparcle sparcle-left sparcle-left-mid-2" x1="151.588" y1="141.191" x2="162.588" y2="149.191" stroke="#FFD84F" stroke-width="2"/>
        <line class="sparcle sparcle-left sparcle-left-top-2" x1="163.648" y1="141.238" x2="169.582" y2="146.286" stroke="#FF6712" stroke-width="2"/>
        <line class="sparcle sparcle-right sparcle-right-mid-2" x1="224.966" y1="142.84" x2="213.543" y2="150.223" stroke="#FF6712" stroke-width="2"/>
        <line class="sparcle sparcle-right sparcle-right-top-2" x1="213.818" y1="139.589" x2="205.808" y2="150.582" stroke="#FFD84F" stroke-width="2"/>
        <line class="sparcle sparcle-right sparcle-right-bottom-2" x1="221.169" y1="153.944" x2="208.33" y2="158.436" stroke="#FF3D00" stroke-width="2"/>
        <line class="sparcle sparcle-left sparcle-left-bottom-2" x1="157.199" y1="154.02" x2="165.367" y2="155.676" stroke="#FF3D00" stroke-width="2"/>
    </svg>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HammerAnimation extends Vue {}
</script>

<style lang="sass" scoped>
.animation
    overflow: visible
    position: absolute
    z-index: 11
    right: 6%
    top: 140px
    width: 550px
    height: 340px

    .hammer 
        transform: rotateZ(0deg)
        transform-origin: 0 50%
        animation: hammer-anim 2s ease-in forwards

    .warscroll 
        transform-origin: center center
        transform: none

    .warscroll-top
        transform: rotateX(80deg) translate(-80px, 180px)
        animation: warscroll-top-anim 1s linear forwards .6s

    .warscroll-middle
        transform: rotateX(80deg) translate(-80px, 175px)
        animation: warscroll-mid-anim 1s linear forwards 1s

    .warscroll-bottom
        transform: rotateX(80deg) translate(-50px, 145px)
        animation: warscroll-bottom-anim 1s linear forwards 1.1s

    .sparcle 
        transform: none
        transform-origin: center center
        
    .sparcle-left-top, .sparcle-left-top-2
        transform: rotateZ(0deg) translate(10px, 15px)
        opacity: 0

    .sparcle-left-top
        animation: sparcle-left-anim .5s linear forwards .6s

    .sparcle-left-top-2
        animation: sparcle-left-anim .5s linear forwards 1s

    .sparcle-left-mid, .sparcle-left-mid-2
        transform: rotateZ(0deg) translate(20px, 13px)
        opacity: 0

    .sparcle-left-mid
        animation: sparcle-left-anim .5s linear forwards .7s

    .sparcle-left-mid-2
        animation: sparcle-left-anim .5s linear forwards 1.1s

    .sparcle-left-bottom, .sparcle-left-bottom-2
        transform: rotateZ(0deg) translate(12px, 5px)
        opacity: 0

    .sparcle-left-bottom
        animation: sparcle-left-anim .5s linear forwards .65s

    .sparcle-left-bottom-2
        animation: sparcle-left-anim .5s linear forwards 1.05s

    .sparcle-right-top, .sparcle-right-top-2
        transform: rotateZ(0deg) translate(-5px, 10px)
        opacity: 0

    .sparcle-right-top
        animation: sparcle-right-anim .5s linear forwards .6s

    .sparcle-right-top-2
        animation: sparcle-right-anim .5s linear forwards 1s

    .sparcle-right-mid, .sparcle-right-mid-2
        transform: rotateZ(0deg) translate(-13px, 12px)
        opacity: 0

    .sparcle-right-mid
        animation: sparcle-right-anim .5s linear forwards .7s

    .sparcle-right-mid-2
        animation: sparcle-right-anim .5s linear forwards 1.1s

    .sparcle-right-bottom, .sparcle-right-bottom-2
        transform: rotateZ(0deg) translate(-13px, 3px)
        opacity: 0

    .sparcle-right-bottom
        animation: sparcle-right-anim .5s linear forwards .65s

    .sparcle-right-bottom-2
        animation: sparcle-right-anim .5s linear forwards 1.05s

@keyframes hammer-anim
    0%
        transform: rotateZ(0deg)

    20%
        transform: rotateZ(-70deg)

    30%     
        transform: rotateZ(0deg)

    40%     
        transform: rotateZ(-70deg)

    50%     
        transform: rotateZ(0deg)

    60%     
        transform: rotateZ(-10deg)

    70%     
        transform: rotateZ(0deg)

    80%     
        transform: rotateZ(-5deg)

    85%     
        transform: rotateZ(0deg)

    90%     
        transform: rotateZ(-3deg)
        
    100%
        transform: rotateZ(0deg)

@keyframes warscroll-mid-anim
    0%
        transform: rotateX(80deg) translate(-80px, 175px)

    20%
        transform: rotateX(80deg) translate(-40px, 145px)
        
    100%
        transform: rotateX(180deg) translate(55px, -85px) rotateZ(80deg)
        

@keyframes warscroll-top-anim
    0%
        transform: rotateX(80deg) translate(-80px, 180px)

    20%
        transform: rotateX(80deg) translate(-40px, 145px)
        
    100%
        transform: rotateX(180deg) translate(0px, -42px) rotateZ(30deg)


@keyframes warscroll-bottom-anim 
    0%
        transform: rotateX(80deg) translate(-50px, 145px)
    
    20%
        transform: rotateX(80deg) translate(-30px, 115px) 
        
    100%
        transform: rotateX(180deg) translate(50px, -50px) rotateZ(60deg)
        

@keyframes sparcle-left-anim
    0%
        opacity: 1
        transform: rotateZ(0deg) translate(10px, 15px)
        
    50%
        opacity: 1
        transform: rotateZ(-45deg) translate(-30px, -50px)

    100% 
        opacity: 0
        transform: rotateZ(-90deg) translate(-50px, -125px)


@keyframes sparcle-right-anim
    0%
        opacity: 1
        transform: rotateZ(0deg) translate(-5px, 10px)
        
    50%
        opacity: 1
        transform: rotateZ(45deg) translate(30px, -100px)

    100% 
        opacity: 0
        transform: rotateZ(90deg) translate(50px, -155px)
</style>