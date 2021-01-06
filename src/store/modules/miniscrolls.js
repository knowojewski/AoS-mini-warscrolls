const state = {
    miniscrolls: [],
    weapons: [],
    abilities: [],
    keywords: [],
    scrollsToPrint: []
};

const getters = {
    getMiniscrolls: state => state.miniscrolls,
    getWeapons: state => state.weapons,
    getAbilities: state => state.abilities,
    getKeywords: state => state.keywords,
    getScrollsToPrint: state => state.scrollsToPrint
};

const actions = {
    deleteForm({ state }, {array, id}) {
        console.log(state);
        const index = array.findIndex(item => item.id === id);
        array.splice(index, 1);
    },

    deleteScroll({ state }, id) {
        const index = state.miniscrolls.findIndex(item => item.id === id);
        state.miniscrolls.splice(index, 1);
    }
};
const mutations = {
    clearWeaponsArray: state => state.weapons = [],
    clearAbilitiesArray: state => state.abilities = [],
    clearKeywordsArray: state => state.keywords = [],
    addScrollToPrint: (state, miniscroll) => state.scrollsToPrint.push(miniscroll), 
};

export default {
    state,
    getters,
    actions,
    mutations
}