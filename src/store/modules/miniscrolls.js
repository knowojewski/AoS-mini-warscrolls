const state = {
    previewScroll: {
        id: null,
        allegiance: null,
        name: null,
        mount: null,
        move: null,
        save: null,
        wounds: null,
        bravery: null,
        weapons: [],
        abilities: [],
        keywords: []
    },

    miniscrolls: [],
    weapons: [],
    abilities: [],
    keywords: [],
    scrollsToPrint: [],

    editMode: false,
    scrollToEdit: {},
    keywordsToEdit: []
};

const getters = {
    getPreviewScroll: state => state.previewScroll,
    getMiniscrolls: state => state.miniscrolls,
    getWeapons: state => state.weapons,
    getAbilities: state => state.abilities,
    getKeywords: state => state.keywords,
    getScrollsToPrint: state => state.scrollsToPrint,
    getEditMode: state => state.editMode,
    getScrollToEdit: state => state.scrollToEdit,
    getKeywordsToEdit: state => state.keywordsToEdit
};

const actions = {
    addScroll({ commit, dispatch }, miniscroll) {
        commit('addScroll', miniscroll);
        dispatch('saveScrollToLocal');
    },

    deleteForm({ state }, {array, id, previewArray}) {
        console.log(state);
        const index = array.findIndex(item => item.id === id);
        array.splice(index, 1);
        previewArray.splice(index, 1);
    },

    deleteScroll({ state, dispatch }, id) {
        const index = state.miniscrolls.findIndex(item => item.id === id);
        state.miniscrolls.splice(index, 1);
        dispatch('saveScrollToLocal');
    },

    changePosition({ dispatch }, {array, id, value}) {
        const index = array.findIndex( item => item.id === id);
        const newIndex = index+value;
        
        if(newIndex !== -1) {
            const itemToMove = array.splice(index, 1);
            array.splice(newIndex, 0, ...itemToMove);
        }

        dispatch('saveScrollToLocal');
    }, 

    editScroll({ commit, state }, id) {
        const miniscroll = state.miniscrolls.find( scroll => scroll.id === id);
        
        state.scrollToEdit = {...miniscroll};

        commit('editModeOn');
    },

    cancelEdit({ commit }) {
        commit('editModeOff');
    }
};
const mutations = {
    clearWeaponsArray: state => state.weapons = [],
    clearAbilitiesArray: state => state.abilities = [],
    clearKeywordsArray: state => state.keywords = [],
    addScroll: (state, miniscroll) => state.miniscrolls.push(miniscroll), 
    addScrollToPrint: (state, miniscroll) => state.scrollsToPrint.push(miniscroll), 
    editModeOn: state => state.editMode = true,
    editModeOff: state => state.editMode = false,
    addWeapon: (state, weapon) => state.weapons.push(weapon),
    addAbility: (state, ability) => state.abilities.push(ability),
    addKeyword: (state, keyword) => state.keywords.push(keyword),
    addPreviewAbility: (state, ability) => state.previewScroll.abilities.push(ability)
};

export default {
    state,
    getters,
    actions,
    mutations
}