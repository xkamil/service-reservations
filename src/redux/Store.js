const Store = {

    init: function (store) {
        this.store = store;
    },

    dispatch: function (action, data, error) {
        this.store.dispatch({type: action, data, error});
    }
};

export default Store;