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
