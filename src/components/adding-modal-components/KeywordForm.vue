<template>
    <div class="box add-box">
        <div class="upper-side">
            <p>Add Unit Keyword</p>
            <button @click.prevent="addKeywordForm" class="add-btn" id="addKeyword">
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="lower-side">
            <div v-for="keyword in getKeywords" :key="keyword.id" class="keyword-add attribute">
                <input type="text" v-model="keyword.keyword" placeholder="Description">
                <button class="attributes-btn" @click="deleteForm({array: getKeywords, id: keyword.id, previewArray: getPreviewScroll.keywords})">
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
export default class KeywordForm extends Vue {
    @Getter getKeywords;
    @Getter getPreviewScroll;
    @Action deleteForm;
    @Mutation addKeyword;

    addKeywordForm() {
        let idDate = new Date();
        let idNumber = idDate.valueOf();

        const keywordForm = {
            id: idNumber,
            keyword: null 
        };

        this.getPreviewScroll.keywords.push(keywordForm);
        this.addKeyword(keywordForm);
    }
}
</script>

<style lang="scss">

</style>