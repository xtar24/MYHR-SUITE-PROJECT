import heroImage from "../assets/heroImage.png";
import Section6 from "../pages/section6";
import frameImage from "../assets/frameImage.png";
import Section7 from "../pages/section7";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="mt-[90px] p-0 relative w-full h-screen">
        <div className="w-full h-full">
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              Supercharge Your Recruitment Process With AI and Next-Gen Features
            </h1>
            <p className="text-white text-lg mt-2">
              From intelligent resume screening to seamless video interviews and
              skill assessments, our platform helps you hire smarter and faster.
            </p>
            {/* Start a Free Trial Button */}
            <button className="mt-6 bg-white text-black border-2 px-6 py-3 rounded-md hover:bg-orange-600 hover:text-white transition-all">
              Start a Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-24 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          Advantages Of Using Our Services
        </h1>
        <p className="text-lg mt-2">
          The platform's automation, AI-driven features, and centralized
          management help streamline tasks, making the recruitment process more
          efficient. Additionally, it enables better candidate-job matching,
          reduces time-to-hire, and enhances the overall candidate experience.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <div className="p-5 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 p-6 rounded-lg flex flex-col items-start hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold">Easy to Use</h3>
              <p className="text-lg mt-2">
                Our platform offers a user-friendly interface with intuitive
                navigation, making it simple for hiring teams to manage job
                postings, screen candidates, and schedule interviews without
                needing extensive training.
              </p>
            </div>
            <div className="border-2 p-6 rounded-lg flex flex-col items-start hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold">Best Services</h3>
              <p className="text-lg mt-2">
                Our provides top-notch features, such as AI-powered resume
                screening, video interview integration, and candidate
                communication tools, ensuring a smooth and efficient hiring
                process.
              </p>
            </div>
            <div className="border-2 p-6 rounded-lg flex flex-col items-start hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold">Used Anywhere</h3>
              <p className="text-lg mt-2">
                With a mobile-responsive design, the platform can be accessed
                from any device, allowing recruiters and hiring managers to
                manage the hiring process on the go, from any location.
              </p>
            </div>
            <div className="border-2 p-6 rounded-lg flex flex-col items-start hover:bg-gray-100 transition-all">
              <h3 className="text-xl text-center font-semibold">Transparent</h3>
              <p className="text-lg mt-2">
                Our promotes transparency in the recruitment process by
                providing real-time updates, data-driven insights, and shared
                evaluations, allowing all stakeholders to stay informed and make
                well-informed hiring decision
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*section4*/}
      <div className="py-24 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          AI-Driven Solutions for Smarter, Faster Hiring
        </h1>
        <p className="text-2xl mt-2">
          Automate resume screening, streamline video interviews, assess skills,
          and engage candidates with powerful recruitment tools.
        </p>
      </div>
      {/*section 5*/}
      <div className="py-24 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Resume Screening</h1>
        <p className="text-2xl mt-2">
          Automate resume screening, streamline video interviews, assess skills,
          and engage candidates with powerful recruitment tools.
        </p>
      </div>
      {/*section 6*/}
      <div className="p-5 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            <Section6 />
          </div>
          <div>
            <img src={frameImage} alt="" srcset="" />
          </div>
        </div>
      </div>
      {/*section 7*/}
      <div className="mt-[90px] p-0 relative w-full h-screen">
        <Section7 />
      </div>
      {/*Section 8*/}
    </div>
  );
};

export default Home;
