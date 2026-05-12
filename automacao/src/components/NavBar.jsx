const Navbar = () => {
  return (
    <div className="my-4 flex h-[60px] items-center justify-center gap-8 rounded-lg bg-blue-100 text-xl font-bold">
      <img src="/aut.png" width={60} height={50} />
      <div className="grid justify-between">
      <h1 className="font-medium">Controle de Estoque</h1>
      <h2 className="flex justify-center">Automação</h2>
   
      </div>
       
    </div> 
  );
};

export default Navbar;
