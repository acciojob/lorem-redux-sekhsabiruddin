import "regenerator-runtime/runtime";

export const fetchData = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  return data;
};
