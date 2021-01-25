<template>
  <div class="box add-box">
    <div class="upper-side">
        <p>Add Unit Weapon</p>
        <button @click.prevent="addWeaponForm" class="add-btn" id="addWeapon">
            <span></span>
            <span></span>
        </button>
    </div>
    <div class="lower-side">
        <div v-for="weapon in getWeapons" :key="weapon.id" class="weapon-add attribute">
            <form class="weapon-form">
                <input type="text" class="text-input name-input" placeholder="Weapon Name" v-model="weapon.name">
                <div class="weapon-infos">
                    <div class="weapon-skills">
                        <select class="text-input" v-model="weapon.type">
                            <option class="select-placeholder" value="" disabled selected hidden>Type</option>
                            <option value="Melee">Melee</option>
                            <option value="Ranged">Ranged</option>
                        </select>
                        <DatalistInput v-model="weapon.range" :arrayProp="getRangeArray" placeholder="Range"/>
                        <DatalistInput v-model="weapon.attack" :arrayProp="getMediumArray" placeholder="Attack"/>
                        <DatalistInput v-model="weapon.hit" :arrayProp="getDiceArray" placeholder="Hit"/>
                        <DatalistInput v-model="weapon.wound" :arrayProp="getDiceArray" placeholder="Wound"/>
                        <DatalistInput v-model="weapon.rend" :arrayProp="getRendArray" placeholder="Rend"/>
                        <DatalistInput v-model="weapon.damage" :arrayProp="getSmallArray" placeholder="Damage"/>
                    </div>
                    <div class="weapon-reminders">
                        <p class="reminders-text">REMINDERS</p>
                        <div class="reminders-box">
                            <DatalistInput v-model="weapon.reminders.rangeFirst" :arrayProp="getRemindersArray" placeholder="First"/>
                            <DatalistInput v-model="weapon.reminders.rangeSecond" :arrayProp="getRemindersArray" placeholder="Second"/>
                        </div>
                        <div class="reminders-box">
                            <DatalistInput v-model="weapon.reminders.attackFirst" :arrayProp="getRemindersArray" placeholder="First"/>
                            <DatalistInput v-model="weapon.reminders.attackSecond" :arrayProp="getRemindersArray" placeholder="Second"/>
                        </div>
                        <div class="reminders-box">
                            <DatalistInput v-model="weapon.reminders.hitFirst" :arrayProp="getRemindersArray" placeholder="First"/>
                            <DatalistInput v-model="weapon.reminders.hitSecond" :arrayProp="getRemindersArray" placeholder="Second"/>
                        </div>
                        <div class="reminders-box">
                            <DatalistInput v-model="weapon.reminders.woundFirst" :arrayProp="getRemindersArray" placeholder="First"/>
                            <DatalistInput v-model="weapon.reminders.woundSecond" :arrayProp="getRemindersArray" placeholder="Second"/>
                        </div>
                        <div class="reminders-box">
                            <DatalistInput v-model="weapon.reminders.rendFirst" :arrayProp="getRemindersArray" placeholder="First"/>
                            <DatalistInput v-model="weapon.reminders.rendSecond" :arrayProp="getRemindersArray" placeholder="Second"/>
                        </div>
                        <div class="reminders-box">
                            <DatalistInput v-model="weapon.reminders.damageFirst" :arrayProp="getRemindersArray" placeholder="First"/>
                            <DatalistInput v-model="weapon.reminders.damageSecond" :arrayProp="getRemindersArray" placeholder="Second"/>
                        </div>
                    </div>
                </div>
            </form>
            <button 
                class="attributes-btn" 
                @click.prevent="deleteForm({
                    array: getWeapons, 
                    id: weapon.id, 
                    previewArray: getPreviewScroll.weapons
                })"
            >
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter, Mutation } from 'vuex-class';
import DatalistInput from './DatalistInput';

@Component({
    components: {
        DatalistInput
    }
})
export default class WeaponForm extends Vue {
    @Getter getWeapons;
    @Getter getPreviewScroll;
    @Getter getDiceArray;
    @Getter getLargeArray;
    @Getter getMediumArray;
    @Getter getSmallArray;
    @Getter getRendArray;
    @Getter getRangeArray;
    @Getter getRemindersArray;
    @Action deleteForm;
    @Mutation addWeapon;

    addWeaponForm() {
        let idDate = new Date();
        let idNumber = idDate.valueOf();

        const weapon = {
            id: idNumber,
            name: null,
            type: "",
            range: null,
            attack: null,
            hit: null,
            wound: null,
            rend: null,
            damage: null,
            reminders: {
                rangeFirst: null,
                rangeSecond: null,
                attackFirst: null,
                attackSecond: null,
                hitFirst: null,
                hitSecond: null,
                woundFirst: null,
                woundSecond: null,
                rendFirst: null,
                rendSecond: null,
                damageFirst: null,
                damageSecond: null
            }    
        };

        this.getPreviewScroll.weapons.push(weapon);
        this.addWeapon(weapon);
    }
}
</script>

<style lang="scss">
.lower-side {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.weapon-add {
    width: 205px;
    background: #fff;
    // box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #000;
    flex-direction: column;

    input, select {
        height: 23px;
        width: 100%;
        font-size: 14px;
        padding: 0 3px;
    }

    input::placeholder { font-style: italic; }
}

.weapon-form {
    padding: 8px;

    .weapon-infos {
        display: flex;
        justify-content: space-between;

        .weapon-skills {
            width: 37%;
            padding-right: 6px;
            border-right: 1px solid #000;
        }

        .weapon-reminders {
            width: 60%;

            .reminders-text {
                font-size: 15px;
                text-align: center;
                height: 23px;
                margin-bottom: 6px;
            }

            .reminders-box {
                width: 100%;
                display: flex;
                justify-content: space-between;

                .datalist-box { width: 49.5%; }
            }
        }
    }
}

.attributes-btn {
    margin-left: auto;
    width: 100%;
    height: 32px;
}
</style>