import Navbar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";


import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { GiMineTruck } from "react-icons/gi";
import { MdFrontLoader } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { PiTireDuotone } from "react-icons/pi";
import { LuDrill } from "react-icons/lu";
import { FaTractor } from "react-icons/fa";
import { MdCable } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";



const Menu = () => {

    const navigate = useNavigate();
     const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
             
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">

<div className="grid grid-cols-2 gap-10">

  <div className="flex flex-col items-center">
  <GiMineTruck 
    className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity" 
    onClick={() => navigate('/fleet')}
  />
  <p className="text-white bg-gray-600">MINESTAR FLEET</p>
</div>

  <div className="flex flex-col items-center">
    <MdFrontLoader className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity"
    onClick={() => navigate('/Terrain-Loading-Grading')} />
    <p className="text-white bg-gray-600">TERRAIN LOADING | GRADING</p>
  </div>

  <div className="flex flex-col items-center">
    <LuDrill className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity"
    onClick={() => navigate('/Terrain-Drilling')} />
    <p className="text-white bg-gray-600">TERRAIN DRILLING</p>
  </div>

  <div className="flex flex-col items-center">
    <GiSolarPower className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity"
    onClick={() => navigate('/UMR')} />
    <p className="text-white bg-gray-600">UMR</p>
  </div>

  <div className="flex flex-col items-center">
    <GiNetworkBars className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity"
    onClick={() => navigate('/Redes')} />
    <p className="text-white bg-gray-600">REDES</p>
  </div>

  <div className="flex flex-col items-center">
    <PiTireDuotone className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity"
    onClick={() => navigate('/MEMS')} />
    <p className="text-white bg-gray-600">MEMS</p>
  </div>

  <div className="flex flex-col items-center">
  <MdCable 
    className="text-7xl text-white cursor-pointer hover:opacity-80 transition-opacity"
    onClick={() => navigate('/Chicotes')}
  />
  <p className="text-white bg-gray-600">CHICOTES</p>
</div>

        <div> <MdLogout onClick={handleLogout}   className="cursor-pointer text-5xl text-white" />  
        </div>
  
</div>


          </div>
        </div>
        <p className="mt-5 text-xl items-center text-white bg-gray-600">Desenvolvido por: Guilherme O Alves</p>
      </div>
       
    
    </>
  );
};

export default Menu;