<template>
  <div class="adding-modal">
      <div class="adding-box">
        <div class="adding-box__top">
            <h2 class="adding-box__heading">Create Warscroll</h2>
            <button class="adding-box__top-btn">
                <span class="first"></span>
                <span class="second"></span>
            </button>
        </div>
        <div class="adding-box__main">
            <div class="adding-box__content">
                <form class="unit-infos">
                    <div class="box text-box">
                        <label for="unit-info-text">Unit Allegiance:</label>
                        <input type="text" id="unit-info-text">
                    </div>
    
                    <div class="box text-box">
                        <label for="unit-info-text">Unit Name:</label>
                        <input type="text" id="unit-info-text">
                    </div>
    
                    <div class="box text-box">
                        <label for="unit-info-text">Unit Mount:</label>
                        <input type="text" id="unit-info-text">
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Move:</label>
                        <input type="text" id="unit-info-text">
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Save:</label>
                        <input type="text" id="unit-info-text">
                        <p>+</p>
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Wounds:</label>
                        <input type="text" id="unit-info-text">
                    </div>
    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Bravery:</label>
                        <input type="text" id="unit-info-text">
                    </div>
    
                    <div class="box add-box">
                        <div class="upper-side">
                            <p>Add Unit Weapon</p>
                            <button class="add-btn" id="addWeapon">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div class="lower-side"></div>
                    </div>
    
                    <div class="box add-box">
                        <div class="upper-side">
                            <p>Add Unit Ability</p>
                            <button class="add-btn" id="addAbility">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div class="lower-side"></div>
                    </div>
    
                    <div class="box add-box">
                        <div class="upper-side">
                            <p>Add Unit Keyword</p>
                            <button class="add-btn" id="addKeyword">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div class="lower-side"></div>
                    </div>

                </form>
                <div class="btn-box">
                    <button class="btn operation-box__btn" id="clearFields"><i class="fas fa-broom"></i>Clear</button>
                    <button class="btn operation-box__btn" id="addWarscroll"><i class="fas fa-folder-plus"></i>Add</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AddingModal extends Vue {

}
</script>

<style lang="scss">
$dark-grey: #272B2A;
$lighter-grey: #665F55;
$yellow: #E7AC51;

.adding-modal {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.adding-box
    position: fixed
    width: 700px
    background: #fff
    top: 167px
    left: 0
    z-index: 1
    // transform: translateX(300px)
    transform: translateX(-700px)
    box-shadow: 2px 0 10px 1px #3333333f
    transition: transform .5s

    .adding-box__top
        width: 100%
        height: 50px
        background: $dark-grey
        display: flex
        justify-content: center
        align-items: center
        position: relative

        .adding-box__heading
            position: relative
            color: #F5F5F5
            font-weight: 400

        .adding-box__heading::before, .adding-box__heading::after
            position: absolute
            content: ''
            height: 2px
            background: #f5f5f5
            width: 150px
            top: 50%

        .adding-box__heading::before
            left: -170px

        .adding-box__heading::after
            right: -170px

        .adding-box__top-btn
            position: absolute
            background: transparent
            width: 28px
            height: 28px
            right: 15px
            border-radius: 50%
            border: none
            display: flex
            align-items: center
            justify-content: center
            cursor: pointer
            transition: background .3s
            
            span
                position: absolute
                display: block
                background: $yellow-collor
                width: 80%
                height: 3px
                transition: background .3s

            .first
                transform: rotateZ(45deg)

            .second
                transform: rotateZ(- 45deg)

        .adding-box__top-btn:hover
            background: #f5f5f5

            span
                background: $dark-grey

    .adding-box__main
        width: 100%
        height: 0
        background: #fff
        overflow-y: scroll
        transition: height .8s

        .adding-box__content
            display: flex
            flex-direction: column
            width: 100%
            height: 100%
            opacity: 0
            padding: 30px
            transition: opacity .2s

            .unit-infos 
                flex: 1
                display: flex
                flex-direction: column
                width: 100%

                .box
                    display: flex
                    align-items: center
                    margin: 8px 0
                    width: 100%

                    label 
                        width: 30%

                    input
                        border: none
                        font-size: 15px
                        height: 30px
                        padding: 4px
                        border-bottom: 1px solid $dark-grey

                    input:focus
                        border-bottom: 2px solid $yellow-collor
                        outline: none

                .text-box
                    input
                        width: 70%

                .number-box
                    input
                        width: 10%

                .add-box
                    display: flex
                    flex-direction: column

                    .upper-side
                        width: 100%
                        display: flex
                        align-items: center

                        p 
                            width: 30%
                        
                        .add-btn
                            width: 35px
                            height: 35px
                            background: $yellow-collor
                            border: none
                            border-radius: 3px
                            display: flex
                            justify-content: center
                            align-items: center
                            position: relative
                            cursor: pointer
                            transition: background .3s

                            span 
                                position: absolute
                                display: block
                                width: 25px
                                height: 2px
                                background: #fff

                            span:first-child

                            span:last-child
                                width: 2px
                                height: 25px

                        .add-btn:hover
                            background: $yellow-lighter

                    .lower-side
                        width: 100%
                        margin-top: 10px

                        .weapon-add, .ability-add, .keyword-add
                            width: 100%
                            display: flex
                            margin-bottom: 5px

                            .attributes-btn
                                border: none
                                width: 30px
                                height: 30px
                                background: $warning-red
                                font-size: 20px
                                color: #ffffff
                                cursor: pointer

                            input, select 
                                width: 10%
                                border: none
                                background: #ececec
                                border-right: 2px solid #ffffff

                            input::placeholder
                                font-style: italic

                            input:nth-child(1)
                                width: 22%

                            input:nth-child(2)
                                width: 15%

                            input:nth-child(3)
                                width: 10%

                            input:nth-child(4)
                                width: 10%

                            input:nth-child(5)
                                width: 9%

                            input:nth-child(6)
                                width: 14%

                            input:nth-child(7)
                                width: 8%

                            input:nth-child(8)
                                width: 12%

                        .ability-add
                            select
                                width: 20%

                            input:nth-child(2)
                                width: 20%
                
                            input:nth-child(3)
                                width: 60%

            .btn-box
                margin-top: 20px
                width: 100%
                display: flex
                justify-content: space-around

                .operation-btn
                    width: 45%

        .adding-box__content.opened
            opacity: 1

    .adding-box__main.opened
        height: 700px
    
.adding-box.opened
    transform: translateX(300px)

</style>