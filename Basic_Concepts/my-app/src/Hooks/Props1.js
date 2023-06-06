import React from 'react'

function ChildComponent (props) {
    return (
        // Always remember use fragement  '<></>'  instead of <div></div>
        <>   
            <button onClick={() => props.greetHandler()}>
                Greet Parent
            </button>
        </>
    )
}

export default ChildComponent


// Example 2:
// import React from 'react';
  
// const Child = (props) => {
//     return(
//       <h2> {props.data} </h2>
//     );
// }
  
// export default Child;