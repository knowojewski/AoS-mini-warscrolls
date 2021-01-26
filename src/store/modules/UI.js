const state = {
    messages: [],
    askModal: {
        open: false,
        title: null,
        content: null,
        onConfirm: null,
        onCancel: null,
        scrollId: null
    }
};

const getters = {
    getMessages: state => state.messages,
    getAskModal: state => state.askModal
};

const actions = {
    openAskModal({ state, dispatch }, { title, content, onConfirm, scrollId}) {
        state.askModal.open = true;
        state.askModal.title = title;
        state.askModal.content = content;
        state.askModal.onConfirm = onConfirm;
        state.askModal.onCancel = () => { dispatch('closeAskModal') };
        state.askModal.scrollId = scrollId;
    },

    closeAskModal({state}) {
        state.askModal.open = false;
        state.askModal.title = null;
        state.askModal.content = null;
        state.askModal.onConfirm = null;
        state.askModal.onCancel = null;
        state.askModal.scrollId = null;
    },

    displayMessage({ state }, {title, content}) {
        let idDate = new Date();
        let idNumber = idDate.valueOf();

        const message = {
            id: idNumber,
            title,
            content
        }

        state.messages.unshift(message);

        setTimeout(() => {
           const index = state.messages.findIndex( item => item.id === message.id);
           state.messages.splice(index, 1); 
        }, 2500);
    }
};
const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}