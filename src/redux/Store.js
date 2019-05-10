const Store = {

    init: function (store) {
        this.store = store;
    },

    dispatch: function (type, data) {
        this.store.dispatch({type, data});
    }
};

export default Store;