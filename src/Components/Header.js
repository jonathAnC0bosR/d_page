import logo from "../logo.jpg";
export default function Header() {
  return (
    <div className="flex justify-center">
      <div className=" items-center flex flex-1 mt-8 ml-16">
        <img src={logo} alt="Company Logo" className="w-20" />
        <p className="flex ml-6">Drone company</p>
      </div>
      <div className="flex flex-1 mt-8 items-center">
        <p className="flex-1">Home</p>
        <p className="flex-1">Services</p>
        <p className="flex-1">Resources</p>
        <p className="flex-1">Us</p>
        <p className="flex-1">Contact info</p>
      </div>
    </div>
  );
}
