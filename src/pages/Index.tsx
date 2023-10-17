import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IndexProps {}

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

const Index: FC<IndexProps> = () => {
  const data = useLoaderData() as Item[];

  return (
    <div>
      <Header />
      <div className="w-full bg-black text-white text-center">
        {/* <h2 className="max-w-[1240px] mx-auto text-3xl font-bold">
          List Of Services
        </h2> */}
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1  bg-black">
        {data.map((saleservice) => (
          <Post key={saleservice.id} post={saleservice} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Index;
