import { useLoaderData, Form } from "react-router-dom";
import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
interface ShowProps {}

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
const Show: FC<ShowProps> = () => {
  const post = useLoaderData() as Item;
  console.log(typeof post)

  return (
    <div>
      <div className="w-full bg-black text-white text-center">
        <Header />
        <h1 className="mb-2 font-semibold text-3xl mt-16">
          saleservice information
        </h1>


        <Form
          method="post"
          action={`/update/${post.id}`}
          className="flex flex-col items-center"
        >
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Title</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="title"
              defaultValue={post.title}
            />
          </div>

          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Group</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="group"
              defaultValue={post.group}
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Location</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="location"
              defaultValue={post.location}
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Price</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="price"
              defaultValue={post.price}
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Unit</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="unit"
              defaultValue={post.unit}
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Image</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="image"
              defaultValue={post.image}
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Provider</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="provider"
              defaultValue={post.provider}
            />
          </div>
          <div className="flex felx-row m-5 h-12 w-[650px]">
            <h2 className="bg-black pt-3 text-right w-20 mr-4">Phone</h2>
            <input
              className="rounded-md w-[450px] text-black"
              type="text"
              name="phone"
              defaultValue={post.phone}
            />
          </div>

          <div>
            <button className="bg-[#00d8ff] mt-8 rounded-lg h-[60px] w-[150px] mb-5"> Update</button>
          </div>
        </Form>

        <Form method="post" action={`/delete/${post.id}`}>
          <button className="bg-[#00d8ff] mt-8 rounded-lg h-[60px] w-[150px] mb-10">
            Delete 
          </button>
      
        </Form>
      </div>
      <Footer />
    </div>
  );
};
export default Show;
