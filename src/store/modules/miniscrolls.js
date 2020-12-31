const state = {
    miniscrolls: [],
    weapons: [],
    abilities: [],
    keywords: []
};

const getters = {
    getMiniscrolls: state => state.miniscrolls,
    getWeapons: state => state.weapons,
    getAbilities: state => state.abilities,
    getKeywords: state => state.keywords
};

const actions = {
    deleteForm({ state }, {array, id}) {
        console.log(state);
        const index = array.findIndex(item => item.id === id);
        array.splice(index, 1);
    }
};
const mutations = {
    clearWeaponsArray: state => state.weapons = [],
    clearAbilitiesArray: state => state.abilities = [],
    clearKeywordsArray: state => state.keywords = [],
};

export default {
    state,
    getters,
    actions,
    mutations
}