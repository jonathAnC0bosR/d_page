import about from "../about.svg";
import Counter from "./Counter";

const text =
  "Nuestro objetivo como empresa especializada es brindarle a nuestros clientes (industriales y utility) un reporte detallado de lo que sucede en sus activos en operación y aplicar conocimiento especializado para indicarles acciones en corto y largo plazo.";
const mision =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut suscipit magna. Ut pulvinar tincidunt tortor, vel porttitor arcu elementum vitae. Ut ut metus urna. Donec accumsan iaculis lorem id malesuada. Pellentesque dignissim elit ut risus tristique efficitur. Sed ac odio ac risus consequat eleifend ut aliquam libero.";
const vision =
  "Donec in aliquet purus. Suspendisse aliquam bibendum sapien et elementum. Nunc ut lobortis felis, sed malesuada elit. Curabitur quis placerat turpis. Donec finibus ipsum felis, eget ultricies sapien vestibulum eu. Nulla orci urna, vehicula nec odio id, accumsan ornare purus. Sed ornare lacus vitae nisi dignissim, non gravida augue aliquet.";

export default function AboutUs() {
  return (
    <div className="h-screen bg-neutral-100">
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-row-reverse">
          <img className="w-5/6" src={about} alt="About svg " />
        </div>
        <div className="flex sm:ml-12 justify-center flex-col w-5/6">
          <h1 className=" font-semibold text-blue-500 text-sm ">ABOUT US</h1>
          <h2 className="text-4xl text-gray-700 py-4">
            PVMEX RATHER THAN A SERVICE <br></br>A SOLUTION
          </h2>
          <p className="text-gray-500">{text}</p>
          <div className="grid grid-cols-2 gap-9 mt-5">
            <div className="bg-neutral-100 drop-shadow-m p-5">
              <h1 className="text-center text-blue-500 font-semibold text-lg drop ">
                MISION
              </h1>
              <p className="text-gr">{mision}</p>
            </div>
            <div className="p-5 bg-neutral-100 drop-shadow-m">
              <h1 className="text-center text-blue-500 font-semibold text-lg">
                VISION
              </h1>
              <p>{vision}</p>
            </div>
          </div>
          <div className="flex justify-center">
                <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}
