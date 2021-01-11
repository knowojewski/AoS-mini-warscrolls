const state = {
    miniscrolls: [],
    weapons: [],
    abilities: [],
    keywords: [],
    scrollsToPrint: [],

    editMode: false
};

const getters = {
    getMiniscrolls: state => state.miniscrolls,
    getWeapons: state => state.weapons,
    getAbilities: state => state.abilities,
    getKeywords: state => state.keywords,
    getScrollsToPrint: state => state.scrollsToPrint,
    getEditMode: state => state.editMode
};

const actions = {
    addScroll({ commit, dispatch }, miniscroll) {
        commit('addScroll', miniscroll);
        dispatch('saveScrollToLocal');
    },

    deleteForm({ state }, {array, id}) {
        console.log(state);
        const index = array.findIndex(item => item.id === id);
        array.splice(index, 1);
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

    editScroll({ commit }, id) {
        console.log(id);
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
    editModeOff: state => state.editMode = false
};

export default {
    state,
    getters,
    actions,
    mutations
}