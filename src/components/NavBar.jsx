import { Children } from "react"; // Children --> children

export default function NavBar({children}){
  return(
    <>
      <header> 
        {children}
      </header>
    </>
  );
}