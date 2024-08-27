import logo from "../logo.jpg";
export default function Header() {
  return (
    <div className="sm:bg-orange-300 flex justify-center py-3 bg-slate-400 ">
      <div className=" items-center flex flex-1 px-8">
        <img src={logo} alt="Company Logo" className="w-16" />
        <p className="flex px-4">Drone company</p>
      </div>
      <div className="flex flex-1 items-center font-sanz">
        <p className="flex-1 text-center">Home</p>
        <p className="flex-1 text-center">Services</p>
        <p className="flex-1 text-center">Resources</p>
        <p className="flex-1 text-center">Us</p>
        <p className="flex-1 text-center">Contact info</p>  
      </div>
    </div>
  );
}
