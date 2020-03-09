export const ApiAction = () => {
  return async dispatch => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const filterData = await data.json();
    dispatch({ type: "NAME", payLoad: filterData[0].name });
  };
};
