<template>
  <div class="datalist-box">
        <input 
        class="text-input" type="text" 
        :value="value" @input="$emit('input', $event.target.value)" 
        :list="placeholder" 
        :placeholder="placeholder"
        >
        <datalist class="datalist" :id="placeholder">
            <option class="datalist-option" v-for="(item, index) in arrayProp" :key="index">
                {{ item }}
            </option>
        </datalist>
        <span class="arrow-icon"><i class="fas fa-angle-down"></i></span>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class DatalistInput extends Vue {
    @Prop(Array) arrayProp;
    @Prop(String) value;
    @Prop(String) placeholder;
}
</script>

<style lang="scss">
.text-input {
    margin-bottom: 6px;
}

.text-input::-webkit-calendar-picker-indicator { display: none; }

.datalist-box {
    position: relative;

    .datalist {
        position: absolute;
        width: 30px;
        z-index: 1;
        background-color: lightgrey;
        font-family: sans-serif;
        font-size: 0.8rem;

        .datalist-option {
            // height: 15px;
            // min-height: 15px;
            background-color: #bbb;
            padding: 4px;
            margin-bottom: 1px;
            cursor: pointer;
        }
    }  

    // .datalist:focus {
    //     display: block;
    // } 

    .arrow-icon {
        height: 21px;
        background: #ececec;
        position: absolute;
        transition: opacity .3s;
        opacity: 0;
        top: 1px;
        padding: 2px;
        right: 1px;
    }


}

.datalist-box:hover {
    .arrow-icon {
        opacity: 1;
    }
}
</style>