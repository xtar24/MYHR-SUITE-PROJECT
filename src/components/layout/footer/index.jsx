import Brand from "../brand";


const Footer = () => {
  return (
    <div className="h-72 bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div className="container mx-auto text-white ">
        <Brand isHeader={false} />
        <p>
          My Hr-Suite is an automation AI-driven features, and centralized
          management that help streamline tasks, making the recruitment process
          more efficient. Additionally, Our platform is designed to address the
          unique challenges that businesses face when searching for the right
          talent.
        </p>
        <div>
          <div>
            <i className="fa-solid fa-house"></i> 
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
