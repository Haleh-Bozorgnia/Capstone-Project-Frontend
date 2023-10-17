import { FC } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import CustomerReview from "../components/CustomerReview";
import Footer from "../components/Footer";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <CustomerReview/>
      <Footer/>
   
  
    </div>
  );
};
export default Home;
