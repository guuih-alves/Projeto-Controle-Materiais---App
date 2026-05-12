import Navbar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard2 from "./components/ContactCard2";
import AddAndUpdateContact2 from "./components/AddAndUpdateContact2";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";



const TerrainLoading = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();
  const navigate = useNavigate();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef2 = collection(db, "terrain-loading-grading");

        onSnapshot(contactsRef2, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate("/");
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef2 = collection(db, "terrain-loading-grading");

    onSnapshot(contactsRef2, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact2) =>
        contact2.Nome.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
             
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              onChange={filterContacts}
              type="text"
              className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
              
            />    
             
          </div>
           
          <AiFillPlusCircle
              onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />

          <MdLogout onClick={handleLogout} className="cursor-pointer text-5xl text-white" />
          
        </div>
          
        
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact2) => (
              <ContactCard2 key={contact2.id} contact={contact2} />
            ))
          )}
        </div>
             <p className="items-center text-white bg-gray-600">Desenvolvido por: Guilherme O Alves</p>
      </div>
     
      <ToastContainer position="bottom-center" />
      <AddAndUpdateContact2 onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default TerrainLoading;