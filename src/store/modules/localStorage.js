const actions = {
    saveScrollToLocal({ rootState }) {
        try {
            const scrollsString = JSON.stringify(rootState.miniscrolls.miniscrolls);
            localStorage.setItem('miniscrolls', scrollsString);
        } catch(error)  {
            console.error(error);
        }
    },

    loadScrollsFromLocal({ rootState }) {
        try {
            const scrollsArray = JSON.parse(localStorage.getItem('miniscrolls'));
            rootState.miniscrolls.miniscrolls = [...scrollsArray];
        } catch(error) {
            console.error(error);
        }
    }
};

export default {
    actions
}