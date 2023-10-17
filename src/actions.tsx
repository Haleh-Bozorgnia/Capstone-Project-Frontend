import { redirect } from "react-router-dom";
import url from "./url";

// Create
// export const createAction = async (request: Request): Promise<Response> => {
//   const formData = await request.formData();
//   const newSaleservice = {
//     title: formData.get("title"),
//     group: formData.get("group"),
//     location: formData.get("location"),
//     price: formData.get("price"),
//     unit: formData.get("unit"),
//     image: formData.get("image"),
//     provider: formData.get("provider"),
//     phone: formData.get("phone"),
//   };
//   await fetch(url, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newSaleservice),
//   });
//   return redirect("/");
// };

// Create Action for Creating Todos
export const createAction = async ({ request }) => {
  // parse out the form data
  const formData = await request.formData();

  // construct the body for our api call
  const newSaleservice = {
    title: formData.get("title"),
    group: formData.get("group"),
    location: formData.get("location"),
    price: formData.get("price"),
    unit: formData.get("unit"),
    image: formData.get("image"),
    provider: formData.get("provider"),
    phone: formData.get("phone"),
  };
  // make a request to create a todo
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSaleservice),
  });
  return redirect("/");
};

// Update
// export const updateAction = async (
//   request: Request,
//   id: string
// ): Promise<Response> => {
//   const formData = await request.formData();
//   const updateSaleservice = {
//     title: formData.get("title"),
//     group: formData.get("group"),
//     location: formData.get("location"),
//     price: formData.get("price"),
//     unit: formData.get("unit"),
//     image: formData.get("image"),
//     provider: formData.get("provider"),
//     phone: formData.get("phone"),
//   };
//   await fetch(url + id, {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updateSaleservice),
//   });
//   // Assuming Redirect is the correct type for your router library
//   return  redirect(`/post/${id}`);
// };

// Update Action for Updating Todos
export const updateAction = async ({ request, params }) => {
  // get the id from params
  const id = params.id;
  // parse out the form data
  const formData = await request.formData();
  // construct the updated todo
  const updateSaleservice = {
    title: formData.get("title"),
    group: formData.get("group"),
    location: formData.get("location"),
    price: formData.get("price"),
    unit: formData.get("unit"),
    image: formData.get("image"),
    provider: formData.get("provider"),
    phone: formData.get("phone"),
  };

  // make a request to update a todo
  await fetch(url + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateSaleservice),
  });

  // redirect to the show page
  return redirect(`/post/${id}`);
};

// Delete
// export const deleteAction = async (id: string): Promise<Response> => {
//   await fetch(url + id, {
//     method: "delete",
//   });
//   // Assuming Redirect is the correct type for your router library
//   return  redirect("/");
// };
// Delete Action for Deleting Todos
export const deleteAction = async ({ params }) => {
  // get the id from params
  const id = params.id;

  // make a request to delete a todo
  await fetch(url + id, {
    method: "delete",
  });

  // redirect to the index page
  return redirect("/");
};
