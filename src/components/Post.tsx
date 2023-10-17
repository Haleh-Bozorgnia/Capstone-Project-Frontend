import { Link } from "react-router-dom";

interface PostProps {
  post: {
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
}

function Post({ post }: PostProps) {
  return (
    <div className="w-full bg-black text-white text-center  px-4 py-16 flex flex-col justify-center items-center">
      <div className="border rounded-lg w-[400px] ">
        <div className="flex flex-col justify-center items-center px-4 py-16">
          <img
            className="border rounded-lg mb-5"
            src={post.image}
            alt={post.title}
          />
          {/* <Link to={`/post/${post.id}`} className="bg-[#00d8fd] text-white">
            <div className="w-[400px] p-5 ">{post.title}</div>
          </Link> */}
          <div className="flex flex-row m-3 ">
            <h3 className="pr-5 font-bold">Service:</h3>
            {post.title}
          </div>
          <div className="flex flex-row m-3 ">
            <h3 className="pr-5 font-bold">Category:</h3>
            {post.group}
          </div>
          <div className="flex flex-row m-3">
            <h3 className="pr-5 font-bold">Location:</h3>
            {post.location}
          </div>
          <div className="flex flex-row m-3">
            <h3 className="pr-5 font-bold">Price:</h3>
            {post.price}
          </div>
          <div className="flex flex-row m-3">
            <h3 className="pr-5 font-bold">Unit:</h3>
            {post.unit}
          </div>
          <div className="flex flex-row m-3">
            <h3 className="pr-5 font-bold">Provider:</h3>
            {post.provider}
          </div>
          <div className="flex flex-row m-3">
            <h3 className="pr-5 font-bold">Phone:</h3>
            {post.phone}
          </div>
          {/* <button  className="bg-[#00d8fd] "> */}
          <button type="button" className="bg-[#00d8fd] rounded-lg w-20 h-10 mt-4">
            <Link to={`/post/${post.id}`} className="px-1 text-white">
              {/* <div className="w-[400px] p-5 "> */}
                Edit 
                {/* {post.title}</div> */}
            </Link>
          </button>

          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
