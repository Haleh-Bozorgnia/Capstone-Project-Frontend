import heroVid from '../assets/video.mp4'
const Hero = () => {
  return (
    <div className=" w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white ">
        <h1 className="text-5xl">Sale Your Service</h1>
        <h1>
          <span className="text-[#00d8ff] text-3xl">Trading</span>Services
        </h1>
        <p className="text-2xl">Application for seeling your Services</p>
      </div>
    </div>
  );
}

export default Hero
