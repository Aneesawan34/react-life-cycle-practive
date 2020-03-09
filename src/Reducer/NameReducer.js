const name = "anees";

export const nameReducer = (state = name, action) => {
  console.log("action ", action);
  switch (action.type) {
    case "NAME":
      return action.payLoad;
    //   console.log(action.payload);
    default:
      return state;
  }
};
