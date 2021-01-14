<template>
    <div class="box add-box">
        <div class="upper-side">
            <p>Add Unit Ability</p>
            <button @click.prevent="addAbilityForm" class="add-btn" id="addAbility">
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="lower-side">
            <div v-for="ability in getAbilities" :key="ability.id" class="ability-add attribute">
                <select id="abilityType" v-model="ability.type">
                    <option value="Ability">Ability</option>
                    <option value="Command Ability">Command Ability</option>
                    <option value="Spell">Spell</option>
                </select>
                <input type="text" v-model="ability.name" placeholder="Name">
                <input type="text" v-model="ability.description" placeholder="Description">
                <button class="attributes-btn" @click="deleteAbility({array: getAbilities, id: ability.id, previewArray: getPreviewScroll.abilities})">
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
export default class AbilityForm extends Vue {
    @Getter getAbilities;
    @Getter getPreviewScroll;
    @Action deleteForm;
    @Action deleteBackOrFront;
    @Mutation addAbility;
    @Mutation addPreviewAbility;
    @Mutation addPreviewBackAbility;

    addAbilityForm() {
        let idDate = new Date();
        let idNumber = idDate.valueOf();

        const abilityForm = {
            id: idNumber,
            type: "Ability",
            name: null,
            description: null  
        };

        this.addPreviewAbility(abilityForm);
        this.addPreviewBackAbility(abilityForm);
        this.addAbility(abilityForm);

        this.$forceUpdate();
    }

    deleteAbility({array, id, previewArray}) {
        this.deleteForm({array, id, previewArray});
        this.deleteBackOrFront(id);
    }
}
</script>

<style lang="scss">

</style>