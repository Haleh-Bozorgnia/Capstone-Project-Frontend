import furniture_assem from "../assets/furniture-assembly.jpeg"
import furniture_lifting from "../assets/Heavy-Lifting.jpeg"
import electrical from "../assets/electrical-help.jpeg"
import plumbing from "../assets/Plumbing-Repairs.jpeg"
const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="py-4 font-bold text-xl">A Growing Platform</h1>
            <p className="py-4 text-xl w-[500px] pb-10">
              SaleService is not just about transactions; it's about building
              relationships and delivering solutions that solve problems and
              create value
            </p>
          </div>
          {/* Card Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-4">
            <div className="flex flex-col border text-left rounded-2xl py-12 px-8 items-center border-[#00d8ff]">
              <div className="bg-[#00d8ff] inline-flex  rounded-full w-[122px] h-[122px]">
                <img
                  src={furniture_assem}
                  alt="img"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
              </div>
              <h2 className="text-xl font-bold py-4">Furniture Assembly</h2>
              <p className="text-center">
                No matter the size or complexity of your furniture, we provide
                prompt and reliable assembly services, making the process
                stress-free for you.
              </p>
            </div>
            <div className="flex flex-col border text-left rounded-2xl py-12 px-8 items-center border-[#00d8ff]">
              <div className="bg-[#00d8ff] inline-flex  rounded-full w-[122px] h-[122px] ">
                <img
                  src={electrical}
                  alt="img"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
              </div>
              <h2 className="text-xl font-bold py-4">Electrical Help</h2>
              <p className="text-center">
                Our team of certified electricians is here to provide you with
                expert electrical help, from troubleshooting electrical issues
                to installations and repairs.
              </p>
            </div>
            <div className="flex flex-col border text-left rounded-2xl py-12 px-8 items-center border-[#00d8ff]">
              <div className="bg-[#00d8ff] inline-flex  rounded-full w-[122px] h-[122px]">
                <img
                  src={plumbing}
                  alt="img"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
              </div>
              <h2 className="text-xl font-bold py-4">Plumbing Repairs</h2>
              <p className="text-center">
                Our professional plumbing repair service is just a call away,
                ready to fix any plumbing issue, large or small, with efficiency
                and expertise.
              </p>
            </div>
            <div className="flex flex-col border text-left rounded-2xl py-12 px-8 items-center border-[#00d8ff]">
              <div className="bg-[#00d8ff] inline-flex  rounded-full w-[122px] h-[122px]">
                <img
                  src={furniture_lifting}
                  alt="img"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
              </div>
              <h2 className="text-xl font-bold py-4">Heavy Lifting</h2>
              <p className="text-center">
                Our experienced team specializes in heavy lifting services,
                providing safe and efficient solutions for moving, rigging, and
                lifting heavy equipment and machinery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
