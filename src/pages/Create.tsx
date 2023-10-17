import { FC } from "react";
import { useLoaderData, Form } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../components/Header";

interface CreateProps {}
type Item = {
  id: string;
  title: string;
  group: string;
  location: string;
  price: string;
  unit: string;
  image: string;
  provider: string;
  phone: string;
};
const Create: FC<CreateProps> = () => {

  const data = useLoaderData() as Item[];
  console.log(data);
  console.log("the type " + typeof data);
  return (
    <div>
      <div className="w-full bg-black text-white text-center">
        <Header />
        <h1 className="mb-2 font-semibold text-3xl mt-16">
          Creat new saleservice
        </h1>
        <Form
          method="post"
          action="/create"
          className="flex flex-col items-center"
        >
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Title</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="title"
            />
          </div>

          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black  pt-3 text-right w-20 mr-5"> Group</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="group"
            />
          </div>

          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 w-20 mr-5">Location</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="location"
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 w-20 mr-5">Price</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="price"
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 w-20 mr-5">Unit</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="unit"
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 w-20 mr-5">Image</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="image"
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 w-20 mr-5">Provider</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="provider"
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 w-20 mr-5">Phone</h2>
            <input
              className="rounded-md w-[450px]  text-black"
              type="text"
              name="phone"
            />
          </div>
          <div>
            <button className="bg-[#00d8ff] mt-8 rounded-lg h-[60px] w-[150px]">
              New saleservice
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Create;
