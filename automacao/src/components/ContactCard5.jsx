import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact5 from "./AddAndUpdateContact5";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
import { RxUpdate } from "react-icons/rx";
import { FaTools } from "react-icons/fa";
import Swal from "sweetalert2";




const ContactCard5 = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "redes", id));
      toast.success("Material deletado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const prevdelete = () => {
    Swal.fire({
      width: 350,
  title: "Voce tem certeza?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Excluir"
}).then((result) => {
  if (result.isConfirmed) {
    deleteContact(contact.id);
    Swal.fire({
      title: "Deletado!",
      text: "Seu arquivo foi deletado.",
      icon: "success"
    });
  }
});
  }

  return (
    <>
      <div
        key={contact.id}
        className="ab flex items-center justify-between rounded-lg yellow p-2"
      >
        <div className=" flex gap-1">
          <FaTools className="text-4xl text-orange" />
          <div className="ml-5">
            <h2 className="font-medium">{contact.Nome}</h2>
            <p className="text-sm">Código: {contact.Codigo}</p>
            <p className="text-sm">Part-Number: {contact.PartNumber}</p>

          {contact.Quantidade <= 2 ? (
             <p className="text-sm qt">Quantidade: {contact.Quantidade}</p>
          ) : (   
              <p className="text-sm ">Quantidade: {contact.Quantidade}</p>
          )}


            
          </div>
        </div>
        <div className="flex text-3xl">
  
          <RxUpdate  onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => prevdelete(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact5
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
     
    </>

  );
};





export default ContactCard5;