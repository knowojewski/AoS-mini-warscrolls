<template>
    <div class="adding-box" :class="{'edit-mode': getEditMode}">
        <img class="bottom-line" src="../../assets/miniscrolls/bottom-line.png" alt="bottom line">
        <img class="side-line left-line" src="../../assets/miniscrolls/side-line.png" alt="Left line">
        <img class="side-line right-line" src="../../assets/miniscrolls/side-line.png" alt="Right line">
        <div class="adding-box__top">
            <h2 v-if="!getEditMode" class="adding-box__heading">Create Warscroll</h2>
            <h2 v-else class="adding-box__heading">Edit Warscroll</h2>
            <img class="top-bg" src="../../assets/miniscrolls/top-bg.png" alt="Top background">
        </div>
        <div class="adding-box__main">
            <div class="adding-box__content">
                <form class="unit-infos">
                    <div class="box text-box">
                        <label for="unit-info-text">Unit Allegiance:</label>
                        <input class="info-input" type="text" v-model="allegiance"> 
                    </div>

                    <div class="box text-box">
                        <label for="unit-info-text">Unit Name:</label>
                        <input class="info-input" type="text" v-model="name">
                    </div>

                    <div class="box text-box text-mount">
                        <label for="unit-info-text">Unit Mount:</label>
                        <input class="info-input" type="text" v-model="mount" placeholder="Optional">
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Move:</label>
                        <select class="info-input" v-model="move.value">
                            <option v-for="(number, index) in getLargeArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                        <span>"</span>
                        <div class="input-check">
                            <label for="moveType">Fly</label>
                            <input 
                            type="checkbox" 
                            id="moveType" 
                            v-model="move.type"
                            true-value="Fly"
                            false-value="Normal"
                            >
                        </div>
                        <!-- <div class="radio-input">
                            <input type="radio" id="moveNormal" name="moveType" value="Normal" v-model="move.type" checked>
                            <label for="moveNormal">Normal</label>
                        </div>
                        <div class="radio-input">
                            <input type="radio" id="moveFly" name="moveType" value="Fly" v-model="move.type">
                            <label for="moveFly">Fly</label>
                        </div> -->
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Save:</label>
                        <select class="info-input" v-model="save">
                            <option v-for="(number, index) in getDiceArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                        <span>+</span>
                    </div>
                    
                    <div class="box number-box">
                        <label for="unit-info-text">Unit Wounds:</label>
                        <select class="info-input" v-model="wounds">
                            <option v-for="(number, index) in getLargeArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                    </div>

                    <div class="box number-box">
                        <label for="unit-info-text">Unit Bravery:</label>
                        <select class="info-input" v-model="bravery">
                            <option v-for="(number, index) in getLargeArray" 
                                :key="index" :value="number">
                                {{ number }}
                            </option>
                        </select>
                    </div>

                    <WeaponForm  />
                    <AbilityForm />
                    <KeywordForm />
                    <RemindersForm :reminders="reminders"/>
                </form>
            </div>
        </div>
        <div class="preview-scroll">
            <p class="preview-title">Warscroll Preview</p>
            <WarscrollComponent :miniscroll="getPreviewScroll" :preview="true"/>
        </div>
        <div class="btns">
            <div v-if="getEditMode" class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button @click="cancelEdit" class="btn operation-box__btn">Cancel</button>
                <div class="btn-bg"></div>
            </div>
            <div class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button @click="clearAll" class="btn operation-box__btn">Clear fields</button>
                <div class="btn-bg"></div>
            </div>
            <div class="btn-box">
                <img src="../../assets/button-border.png" alt="Button border">
                <button v-if="!getEditMode" @click="createMiniscroll" class="btn operation-box__btn">Create warscroll</button>
                <button v-else @click="createMiniscroll" class="btn operation-box__btn">Confirm edition</button>
                <div class="btn-bg"></div>
            </div>
        </div> 
    </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';
import WeaponForm from '../adding-modal-components/WeaponForm';
import AbilityForm from '../adding-modal-components/AbilityForm';
import KeywordForm from '../adding-modal-components/KeywordForm';
import RemindersForm from '../adding-modal-components/RemindersForm';
import WarscrollComponent from '../WarscrollComponent';

@Component({
    components: {
        WeaponForm,
        AbilityForm,
        KeywordForm,
        RemindersForm,
        WarscrollComponent
    }
})
export default class AddingBox extends Vue {
    @Getter getPreviewScroll;
    @Getter getMiniscrolls;
    @Getter getWeapons;
    @Getter getAbilities;
    @Getter getKeywords;
    @Getter getEditMode;
    @Getter getScrollToEdit;
    @Getter getLargeArray;
    @Getter getDiceArray;
    @Action closeAddingBox;
    @Action addScroll;
    @Action cancelEdit;
    @Action confirmEdit;
    @Mutation clearWeaponsArray;
    @Mutation clearAbilitiesArray;
    @Mutation clearKeywordsArray;

    allegiance = null;
    name = null;
    mount = null;
    move = {
        type: null,
        value: null
    };
    save = null;
    wounds = null;
    bravery = null;
    reminders = {
        move: {
            first: null,
            second: null
        },
        save: {
            first: null,
            second: null
        },
        wounds: {
            first: null,
            second: null
        },
        bravery: {
            first: null,
            second: null
        }
    };

    @Watch('getEditMode')
    onEditModeChange(){
        if(this.getEditMode === true) {
            this.allegiance = this.getScrollToEdit.allegiance;
            this.name = this.getScrollToEdit.name;
            this.mount = this.getScrollToEdit.mount;
            this.move.type = this.getScrollToEdit.move.type;
            this.move.value = this.getScrollToEdit.move.value;
            this.save = this.getScrollToEdit.save;
            this.wounds = this.getScrollToEdit.wounds;
            this.bravery = this.getScrollToEdit.bravery;
            this.reminders = {...this.getScrollToEdit.reminders};

            document.firstElementChild.classList.add('edit-mode');
        } else if(this.getEditMode === false) {
            this.clearAll();
            document.firstElementChild.classList.remove('edit-mode');
        }
    }

    @Watch('name')
    onNameChange(val) { this.getPreviewScroll.name = val; }
    @Watch('mount')
    onMountChange(val) { this.getPreviewScroll.mount = val; }
    @Watch('move', {deep: true})
    onMoveChange() { this.getPreviewScroll.move = {...this.move}; }
    @Watch('save')
    onSaveChange(val) { this.getPreviewScroll.save = val; }
    @Watch('wounds')
    onWoundsChange(val) { this.getPreviewScroll.wounds = val; }
    @Watch('bravery')
    onBraveryChange(val) { this.getPreviewScroll.bravery = val; }
    @Watch('reminders', {deep: true})
    onRemindersChange() {
        this.getPreviewScroll.reminders = {...this.reminders};
    }

    createMiniscroll() {
        let idNumber = null;

        if(this.getEditMode === true) {
            idNumber = this.getScrollToEdit.id;
            console.log(`Updated ${idNumber}`);
        } else {
            let idDate = new Date();
            idNumber = idDate.valueOf();
            console.log(`Added ${idNumber}`);
        }

        console.log(this.getScrollToEdit.id);

        const miniscroll = {
            id: idNumber,
            allegiance: this.allegiance,
            name: this.name,
            mount: this.mount,
            move: {
                type: this.move.type,
                value: this.move.value
            },
            save: this.save,
            wounds: this.wounds,
            bravery: this.bravery,
            reminders: {
                move: {
                    first: this.reminders.move.first,
                    second: this.reminders.move.second
                },
                save: {
                    first: this.reminders.save.first,
                    second: this.reminders.save.second
                },
                wounds: {
                    first: this.reminders.wounds.first,
                    second: this.reminders.wounds.second
                },
                bravery: {
                    first: this.reminders.bravery.first,
                    second: this.reminders.bravery.second
                }
            },
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
                damage: item.damage,
                reminders: {...item.reminders}    
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
        
        if(this.getEditMode === true) {
            this.confirmEdit(miniscroll);
            this.cancelEdit();
        } else {
            this.addScroll(miniscroll);
        }

        console.log(miniscroll)
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    clearAll() {
        this.allegiance = null;
        this.name = null;
        this.mount = null;
        this.move.value = null;
        this.move.type = null;
        this.save = null;
        this.wounds = null;
        this.bravery = null;
        this.reminders.move.first = null;
        this.reminders.move.second = null;
        this.reminders.save.first = null;
        this.reminders.save.second = null;
        this.reminders.wounds.first = null;
        this.reminders.wounds.second = null;
        this.reminders.bravery.first = null;
        this.reminders.bravery.second = null;

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
    padding-bottom: 10px
    background: #fff
    transition: transform .5s
    z-index: 11  

    .preview-scroll
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        .preview-title 
            border-top: 1px solid #000
            width: 90%
            text-align: center
            font-size: 18px
            margin: 4px 0

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
        height: 580px
        background: #fff
        overflow-y: scroll
        transition: height .8s

        .adding-box__content
            display: flex
            flex-direction: column
            width: 100%
            height: 100%
            padding: 0 30px 0 30px
            transition: opacity .2s


            .unit-infos 
                position: relative
                flex: 1
                display: flex
                flex-direction: column
                width: 100%

                    
                .box
                    position: relative
                    display: flex
                    align-items: center
                    margin: 8px 0
                    width: 100%

                    label 
                        width: 30%

                    .info-input
                        border: none
                        font-size: 15px
                        height: 30px
                        padding: 4px
                        border-bottom: 1px solid #272b2a

                    .info-input:focus
                        border-bottom: 2px solid #ff5372
                        outline: none

                    .input-check
                        display: flex
                        align-items: center
                        justify-content: space-between
                        margin-left: 5px

                        label
                            font-size: 14px
                            margin-right: 5px
                
                .text-mount
                    margin-bottom: 30px

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
                            display: flex
                            margin-bottom: 5px

                            input, select 
                                border: none
                                background: #ececec
                                border-right: 2px solid #ffffff
                                padding: 0 3px

                            .attributes-btn
                                border: none
                                background: #000
                                font-size: 20px
                                color: #ffffff
                                cursor: pointer
                                transition: background .3s

                            .attributes-btn:hover
                                background: #ff5372

                        .ability-add, .keyword-add
                            input, select 
                                font-size: 15px

                            .attributes-btn
                                width: 30px
                                height: 30px

                        .ability-add
                            width: 100%

                            select
                                width: 20%

                            input:nth-child(2)
                                width: 20%
                
                            input:nth-child(3)
                                width: 60%

                        .keyword-add
                            width: 100%

.edit-mode 
    margin: 100px 0

.btns
    position: absolute
    bottom: -40px
    left: 0
    width: 100%
    display: flex
    justify-content: center

@media print 
    .adding-box 
        display: none
</style>