import React, { useRef } from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function App(){
    const notify = () => toast.warning("Wow so easy!");

    let myref = useRef()

    function inputfocus(){
      myref.current.focus()
    }
    function change(){
      myref.current.innerHTML="hy there"
      myref.current.style.backgroundColor="blue"
    }



    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer position="top-center" theme="colored" />

        {/* <button onClick={toasthandler}></button> */}

        <input type="text" ref={myref} />
        <button onClick={inputfocus}>Tap here</button>

        <h1 ref={myref}>whoo are you</h1>

        <button onClick={change}>change</button>      </div>
    );
  }
  export default App