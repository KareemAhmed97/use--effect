import { useEffect, useRef, useState } from "react";


const App = () => {
  const [term, setTerm] = useState("ka");
  const term2 = useRef();

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");


  useEffect(()=>{
    term2.current = term
  })

const prevTerm = term2.current

console.log({term2})




  //----------------------------------------------------
  //------   1-first typ oh use effect (first run after reder run one time only)
  //----------------------------------------------------
  //
  // useEffect(
  //   // add your code
  //   () => {
  //     console.log("hello");
  //   },

  //   [] 
  // );

  // //----------------------------------------------------------------------------------------
  // //------     2- secod type of use effect   (useeffect update run when dependency updated )
  // //----------------------------------------------------------------------------------------

  // useEffect(
  //   () => {
  //     if (name || phone) {
  //       console.log("second use effect");
  //     }
  //   },
  //   [name, phone] //--> watcher(lisnter)   use effect dependency array
  // );


  // //----------------------------------------------------------------------
  // //------     3- third type of use effect   (use effect with no dependecy)
  // //-----------------------------------------------------------------------

  // useEffect(() => {
  //   console.log("third type");
  // });


  // //----------------------------------------------------------------------
  // //------     4- cleartime out ------
  // //-----------------------------------------------------------------------

  // useEffect(() => {
  //   if (name) {
  //     const timeOut = setTimeout(() => console.log("hi man"), 2000);
  //     return () => {
  //       clearTimeout(timeOut);
  //     };
  //   }
  // }, [name]);


  return (
    <div>
    <label htmlFor="test1" style={{fontSize:"30px" , marginRight:"50px"}}>Type you name</label>
      <input type="text"  value={term} onChange={(e)=> setTerm(e.target.value)}/ >
      
<br />
<br />
      <p style={{fontSize:"25px"}} >Current value : {term} </p>
      <p style={{fontSize:"25px"}} >Prev value :{prevTerm} </p>
      

    </div>
  );
};
export default App;
