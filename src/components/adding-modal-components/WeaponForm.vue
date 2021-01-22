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
            <input type="text" v-model="weapon.name" placeholder="Name">
            <select id="abilityType" v-model="weapon.type">
                <option value="Melee">Melee</option>
                <option value="Ranged">Ranged</option>
            </select>

            <input type="text" v-model="weapon.range" list="range" placeholder="Range">
            <datalist id="range">
                <option v-for="(item, index) in getLargeArray" :key="index">{{ item }}</option>
            </datalist>

            <input type="text" v-model="weapon.attack" placeholder="Attack">
            <input type="text" v-model="weapon.hit" placeholder="To Hit">
            <input type="text" v-model="weapon.wound" placeholder="To Wound">
            <input type="text" v-model="weapon.rend" placeholder="Rend">
            <input type="text" v-model="weapon.damage" placeholder="Damage">
            <button 
                class="attributes-btn" 
                @click="deleteForm({
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

@Component
export default class WeaponForm extends Vue {
    @Getter getWeapons;
    @Getter getPreviewScroll;
    @Getter getDiceArray;
    @Getter getLargeArray;
    @Action deleteForm;
    @Mutation addWeapon;

    addWeaponForm() {
        let idDate = new Date();
        let idNumber = idDate.valueOf();

        const weapon = {
            id: idNumber,
            name: null,
            type: "Melee",
            range: null,
            attack: null,
            hit: null,
            wound: null,
            rend: null,
            damage: null    
        };

        this.getPreviewScroll.weapons.push(weapon);
        this.addWeapon(weapon);
    }
}
</script>

<style lang="scss">
.attribute {
    input, select {
        width: 10%;
        border: none;
        background: #ececec;
        border-right: 2px solid #ffffff;
    }

    input::placeholder { font-style: italic; }
}

    
// input:nth-child(1)
//     width: 22%

// input:nth-child(2)
//     width: 15%

// input:nth-child(4)
//     width: 10%

// input:nth-child(5)
//     width: 10%

// input:nth-child(6)
//     width: 9%

// input:nth-child(7)
//     width: 14%

// input:nth-child(8)
//     width: 8%

// input:nth-child(9)
//     width: 12%
</style>