const state = {
    addingBox: false,
    addingBoxMain: false,
    addingBoxContent: false
};

const getters = {
    getAddingBox: state => state.addingBox,
    getAddingBoxMain: state => state.addingBoxMain,
    getAddingBoxContent: state => state.addingBoxContent,
};

const actions = {
    openAddingBox({ state }) {
        state.addingBox = true;

        setTimeout(() => {
            state.addingBoxMain = true;
    
            setTimeout(() => {
                state.addingBoxContent = true;
            }, 800);
    
        }, 500);
    },

    closeAddingBox({ state }) {
        state.addingBoxContent = false;

        setTimeout(() => {
            state.addingBoxMain = false;
    
            setTimeout(() => {
                state.addingBox = false;
            }, 800);
        }, 200);
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}