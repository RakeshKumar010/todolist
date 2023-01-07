import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [inp,setInp]=useState();
  const [val,setval]=useState([]);
  function inpFun(e){
    
    setInp(e.target.value.toUpperCase())
  }
  function subFun(e){
    e.preventDefault();
    console.log(e.target.value)
    setval((arr)=>{
      return [...arr,inp];
    })

  }
  function deleteFun(id){
    setval((oldarr)=>{
     return oldarr.filter((v,i)=>{
        return i!==id;
      })
    })
  }
  return (
    <>
    <div className="head"> <h1>Todo List</h1></div>
  
    <form onSubmit={subFun}>
    <input type="text"  onChange={inpFun}/>
    <button type="submit">OK</button>
    <ul>
        {val.map((v,i)=>{
          return (<>
          <i className="fa-regular fa-circle-xmark" onClick={()=>{
            return deleteFun(i);
          }}></i>
          <li>{v}</li><br /><br />
          
          </>) 
        })}
    </ul>
    </form>
    <h4>© Developed by <a href="https://www.linkedin.com/in/rakesh-kumar-146238220/" target="_blank" rel="noreferrer">Raesh kumar</a>.</h4>
    </>
  )
}
























// import React, { useState } from 'react'
// import Todolist from './components/Todolist'
// import './App.css'

// export default function App() {
//     const [inp,setInp]=useState(); 
//     const [finalValue,setFinalValue]=useState([])
//     function inpFun(e){
//        setInp(e.target.value.toUpperCase());
//     }
//     function clickFun(e){
//       e.preventDefault();
//       setFinalValue((pre)=>{
//           return[...pre,inp]
//       })
//     }
//     function deleteFun(id){
//       setFinalValue((oldarr)=>{
//         return oldarr.filter((a,i)=>{
//           return i!==id;
//         })
//       })
//     }
//   return (
//     <>
//       <form onSubmit={clickFun}>
//         <input type="text" onChange={inpFun} />
//         <button type='submit'>+</button></form>
//         <ul  >
//             {finalValue.map((value,ind)=>{
//              return <Todolist text={value} index={ind} id={ind} onSel={deleteFun} />
//             })}
//         </ul>
    
//     </>
//   )
// }
