export default function(state= null, action){
    switch (action.type) {
      case "Article_Selected": return action.payload;
        break;
      case "Source_Selected": return action.payload;
        break;
    }
    return state;
  }