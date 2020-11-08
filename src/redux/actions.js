let actions = {
    modifyList: function(index, innerIndex, checkedStatus) {
      return {
        type: 'MODIFY_LIST',
        index: index,
        innerIndex: innerIndex,
        newStatus: checkedStatus
      }
    }
  }
  export default actions