import url from "./url";

export const indexLoader = async () => {
  try {
    const response = await fetch(url);
    const saleservices = await response.json();
    return saleservices;
  } catch (error) {
    // Handle errors here
    console.error("Error in indexLoader:", error);
    throw error;
  }
};

// export const showLoader = async ({ params }: { params: { id: string } }) => {
//   try {
//     const id = params.id;
//     const response = await fetch(url + id);
//     const saleservice = await response.json();
//     return saleservice;
//   } catch (error) {
//     // Handle errors here
//     console.error("Error in showLoader:", error);
//     throw error;
//   }
// };

export const showLoader = async ({ params }) => {
  // grab the id from params
  const id = params.id;
  // make api call to backend show route
  const response = await fetch(url + id);
  // turn response into a javascript object
  const todo = await response.json();
  // return the javascript object so the Show component can use it
  return todo;
};
