const myArray = ["apple", "banana", "orange"];
export const arrayReducer = (state = myArray, action) => {
  switch (action.type) {
    case "MYARRAY":
      return action.payLoad;
    default:
      return state;
  }
};
