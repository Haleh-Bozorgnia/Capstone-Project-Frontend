import { FC } from "react";
import star  from "../assets/icons/star.svg";
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.svg'

interface CustomerReviewProps{}

const CustomerReview: FC<CustomerReviewProps> = () => {
  return (
    <section className="max-container w-full bg-black text-white text-center">
      <h3 className="font-planquin text-center text-4xl font-bold ">
        What our
        <span className="text-red">Customer</span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exeptional
        experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        <div className="flex justify-center items-center flex-col">
          <img
            src={customer1}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            I'll definitely be a returning customer
          </p>
          <div>
            <div className="mt-3 flex justify-center items-center gap-2.5">
              <img
                src={star}
                alt="customet-pic"
                width={24}
                height={24}
                className="object-contain m-0"
              />
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold pb-5">
              Morich Brown
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            src={customer2}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 max-w-sm text-center info-text">
            The attention to detail and the customer service expected my
            expectations.Highly recommended!
          </p>
          <div>
            <div className="mt-3 flex justify-center items-center gap-2.5">
              <img
                src={star}
                alt="customet-pic"
                width={24}
                height={24}
                className="object-contain m-0"
              />
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold pb-5">
              Lota Mongeskar
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview