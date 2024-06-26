import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img src={person}className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts}className="w-1/2 rounded-lg absolute right-5 border-8 border-white top-[50%] shadow-2xl" />
   
    </div>
    <div className="ml-8 lg:w-1/2 space-y-7">
        <h3 className="text-red-600 font-bold">About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
      <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button className="btn btn-primary">Get More Info </button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default About;