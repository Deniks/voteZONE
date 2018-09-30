const subscriptionReducer = (state = [], action) => {
    switch(action.type) {
        case 'MAKE_SUBSCRIPTION':
          return state.concat([action.data])
        default:
          return state;
    }
  }
  export default subscriptionReducer;