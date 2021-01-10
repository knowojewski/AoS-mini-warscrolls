<template>
    <div class="adding-box">
        <img class="bottom-line" src="../../assets/miniscrolls/bottom-line.png" alt="bottom line">
        <img class="side-line left-line" src="../../assets/miniscrolls/side-line.png" alt="Left line">
        <img class="side-line right-line" src="../../assets/miniscrolls/side-line.png" alt="Right line">
        <div class="adding-box__top">
            <h2 class="adding-box__heading">Create Warscroll</h2>
            <img class="top-bg" src="../../assets/miniscrolls/top-bg.png" alt="Top background">
        </div>
        <div class="adding-box__main">
            <div class="adding-box__content">
                <form class="unit-infos">
                    <div class="box text-box">
                        <label for="unit-info-text">Unit Allegiance:</label>
                        <input type="text" v-model="allegiance">
                    </div>

                    <div class="box text-box">
                        <label for="unit-info-text">Unit Name:</label>
                        <input type="text" v-model="name">
                    </div>

                    <div class="box text-box">
                        <label for="unit-info-text">Unit Mount:</label>
                        <input type="text" v-model="mount" placeholder="Optional">
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Move:</label>
                        <select v-model="move">
                            <option v-for="(number, index) in largeArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                        <span>"</span>
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Save:</label>
                        <select v-model="save">
                            <option v-for="(number, index) in diceArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                        <span>+</span>
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Wounds:</label>
                        <select v-model="wounds">
                            <option v-for="(number, index) in largeArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                    </div>

                    <div class="box number-box">
                        <label for="unit-info-text">Unit Bravery:</label>
                        <select v-model="bravery">
                            <option v-for="(number, index) in largeArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                    </div>

                    <WeaponForm  />
                    <AbilityForm />
                    <KeywordForm />
                </form>
            </div>
        </div>
        <div class="btns">
            <div class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button @click="clearAll" class="btn operation-box__btn">Clear fields</button>
            </div>
            <div class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button @click="createMiniscroll" class="btn operation-box__btn">Create warscroll</button>
            </div>
        </div> 
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';
import WeaponForm from '../adding-modal-components/WeaponForm';
import AbilityForm from '../adding-modal-components/AbilityForm';
import KeywordForm from '../adding-modal-components/KeywordForm';

@Component({
    components: {
        WeaponForm,
        AbilityForm,
        KeywordForm
    }
})
export default class AddingBox extends Vue {
    @Getter getMiniscrolls;
    @Getter getWeapons;
    @Getter getAbilities;
    @Getter getKeywords;
    @Action closeAddingBox;
    @Action addScroll;
    @Mutation clearWeaponsArray;
    @Mutation clearAbilitiesArray;
    @Mutation clearKeywordsArray;

    allegiance = null;
    name = null;
    mount = null;
    move = null;
    save = null;
    wounds = null;
    bravery = null;

    largeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, "D3", "2xD3", "D6", "2xD6"];
    diceArray = [1,2,3,4,5,6];

    createMiniscroll() {
        let idDate = new Date();
        let idNumber = idDate.valueOf();

        const miniscroll = {
            id: idNumber,
            allegiance: this.allegiance,
            name: this.name,
            mount: this.mount,
            move: this.move,
            save: this.save,
            wounds: this.wounds,
            bravery: this.bravery,
            weapons: [],
            abilities: [],
            keywords: []
        }

        this.getWeapons.forEach( item  => {
            const weapon = {
                id: item.id,
                name: item.name,
                type: item.type,
                range: item.range,
                attack: item.attack,
                hit: item.hit,
                wound: item.wound,
                rend: item.rend,
                damage: item.damage    
            }

            miniscroll.weapons.push(weapon);
        })

        this.getAbilities.forEach( item  => {
            const ability = {
                id: item.id,
                type: item.type,
                name: item.name,
                description: item.description  
            }

            miniscroll.abilities.push(ability);
        })

        this.getKeywords.forEach( item  => {
            const keyword = {
                id: item.id,
                keyword: item.keyword
            }

            miniscroll.keywords.push(keyword);
        })
        
        this.addScroll(miniscroll);

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    clearAll() {
        this.allegiance = null;
        this.name = null;
        this.mount = null;
        this.move = null;
        this.save = null;
        this.wounds = null;
        this.bravery = null;

        this.clearWeaponsArray();
        this.clearAbilitiesArray();
        this.clearKeywordsArray();
    }
}
</script>

<style lang="sass">
.adding-box 
    position: relative
    width: 700px
    max-width: 700px
    margin-bottom: 100px
    padding-bottom: 50px
    background: #fff
    transition: transform .5s
    z-index: 11  

    .bottom-line
        width: 100% 
        position: absolute
        bottom: 0
        left: 0

    .side-line 
        height: 100%
        position: absolute
        top: 0

    .left-line
        left: -5px

    .right-line
        right: -5px

    .adding-box__top
        width: 100%
        height: 50px
        display: flex
        align-items: center
        position: relative
        
        .top-bg 
            position: absolute
            width: 102%
            height: 100%
            top: -5px
            left: -1%
            z-index: 0

        .adding-box__heading
            position: relative
            color: #F5F5F5
            font-size: 18px
            font-weight: 500
            padding: 0 0 14px 30px
            text-transform: uppercase
            z-index: 1

    .adding-box__main::-webkit-scrollbar
        background: #ffffff
        width: 5px

    .adding-box__main::-webkit-scrollbar-thumb
        background: #000

    .adding-box__main
        width: 100%
        height: 600px
        background: #fff
        overflow-y: scroll
        transition: height .8s

        .adding-box__content
            display: flex
            flex-direction: column
            width: 100%
            height: 100%
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

                    input, select
                        border: none
                        font-size: 15px
                        height: 30px
                        padding: 4px
                        border-bottom: 1px solid #272b2a

                    input:focus, select:focus
                        border-bottom: 2px solid #ff5372
                        outline: none

                .text-box
                    input
                        width: 70%

                .number-box
                    select
                        width: 10%
                        cursor: pointer

                    span 
                        font-size: 22px
                        font-weight: 400

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
                            background: #000
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
                            background: #ff5372

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
                                background: #000
                                font-size: 20px
                                color: #ffffff
                                cursor: pointer
                                transition: background .3s

                            .attributes-btn:hover
                                background: #ff5372

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

.btns
    position: absolute
    bottom: -40px
    left: 0
    width: 100%
    display: flex
    justify-content: center
</style>