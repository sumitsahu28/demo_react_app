let reducer = (state, action) => {
    switch (action.type) {
      case 'MODIFY_LIST':
        return Object.assign({}, state, {
          provinces: state.provinces.map((s, i) => {
              if(i === action.index) {
                s.cities[action.innerIndex].checked = !action.newStatus;
                return s;
              } 
              else 
              return s;
          })
        })
      default:
        return state;
      }
  }
  export default reducer;