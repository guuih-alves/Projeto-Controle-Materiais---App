import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const auth = getAuth();


const contactSchemaValidation = Yup.object().shape({
  Nome: Yup.string().required("Nome é obrigatório"),
  Quantidade: Yup.number().required("Quantidade é obrigatório").typeError('O valor deve ser numerico.'),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  
  const addContact = async (contact) => {   //inserção de dados

     onAuthStateChanged(auth, (user) => { //recupera dados de auth
    const userEmail = user.email;

      if(userEmail === 'lucas@csn.com'){
          try {
      {

      const contactRef = collection(db, "fleet");
       addDoc(contactRef, contact);
      onClose();
      toast.success("Material adicionado com sucesso");
      
    }
   } catch (error) {
      console.log(error);
    }

           }
    else{
      alert('Sem permissao de cadastro')
    }
    });
  };

  

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "fleet", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Material atualizado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };


  return (

    
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  Nome: contact.Nome,
                  Codigo: contact.Codigo,
                  PartNumber: contact.PartNumber,
                  Quantidade: contact.Quantidade
                }
              : {
                  Nome: "",
                  Codigo: "",
                  PartNumber: "",
                  Quantidade: ""
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >  
          
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Nome">Nome </label>
              <Field name="Nome" disabled={isUpdate} className="db h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Nome" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Codigo SAP">Código</label>
              <Field name="Codigo" disabled={isUpdate} className="db h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Codigo" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="PartNumber">Part-Number</label>
              <Field name="PartNumber" disabled={isUpdate} className="db h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="PartNumber" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Quantidade">Quantidade</label>
              <Field name="Quantidade" className="h-10 border" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="Quantidade" />
              </div>
            </div>



            <button className="self-end border bg-orange px-3 py-1.5">
              {isUpdate ? "Atualizar" : "Adicionar"} Material 
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
