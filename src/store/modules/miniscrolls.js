const state = {
    previewScroll: {
        id: 'preview',
        allegiance: null,
        name: null,
        mount: null,
        move: {
            type: null,
            value: null
        },
        save: null,
        wounds: null,
        bravery: null,
        reminders: {
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
        },
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

    deleteBackOrFront({ state }, id) {
        if(state.previewScroll.backAbilities) {
            const inFront = state.previewScroll.frontAbilities.findIndex(item => item.id === id);
            const inBack = state.previewScroll.backAbilities.findIndex(item => item.id === id);

            if(inFront === -1) {
                state.previewScroll.backAbilities.splice(inBack, 1);
            } else if(inBack === -1) {
                state.previewScroll.frontAbilities.splice(inFront, 1);
            }
        }
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
        state.weapons = [...miniscroll.weapons];
        state.abilities = [...miniscroll.abilities];
        state.keywords = [...miniscroll.keywords];
        state.previewScroll.weapons = [...miniscroll.weapons];
        state.previewScroll.abilities = [...miniscroll.abilities];
        state.previewScroll.keywords = [...miniscroll.keywords];
        
        commit('editModeOn');
    },

    cancelEdit({ commit }) {
        commit('editModeOff');
    },

    confirmEdit({ state }) {
        console.log('confirm');
        console.log(state)

        // state.miniscrolls.find( scroll => scroll.id === state.scrollToEdit.id) = {...state.previewScroll};
    }
};
const mutations = {
    clearWeaponsArray: state => {
        state.weapons = [];
        state.previewScroll.weapons = [];
    },
    clearAbilitiesArray: state => {
        state.abilities = []; 
        state.previewScroll.abilities = []; 
    },
    clearKeywordsArray: state => {
        state.keywords = [];
        state.previewScroll.keywords = [];
    },
    addScroll: (state, miniscroll) => state.miniscrolls.push(miniscroll), 
    addScrollToPrint: (state, miniscroll) => state.scrollsToPrint.push(miniscroll), 
    editModeOn: state => state.editMode = true,
    editModeOff: state => state.editMode = false,
    addWeapon: (state, weapon) => state.weapons.push(weapon),
    addAbility: (state, ability) => state.abilities.push(ability),
    addKeyword: (state, keyword) => state.keywords.push(keyword),
    addPreviewAbility: (state, ability) => state.previewScroll.abilities.push(ability),
    addPreviewBackAbility: (state, ability) => {
        if(state.previewScroll.backAbilities) 
            state.previewScroll.backAbilities.push(ability);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}