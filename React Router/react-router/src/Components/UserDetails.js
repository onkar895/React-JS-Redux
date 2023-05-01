import { useParams } from "react-router-dom"
// Dynamic routing solves the hard coding problem by allowing us to conditionally render whatever page we want.
// This is where the useParams Hook comes in.
//useParams hooks allows you to access the parameters of the current route or URL.
// This can be useful if you want to dynamically render content based on the URL parameters.


// So in our app.js u can find users/:userId. This :userid will be the parameter that represent any users id and will display that specific users page accordingly.

const UserDeatails = () => {
    // const params = useParams()
    // const userId = params.userId 
    const {userId} = useParams()    //get the URL parameters
    // The "useParams" hook returns an object containing key-value pairs of the dynamic parameters specified in the route. 
   // In this case, the "userId" parameter is extracted from this object and assigned to a constant variable also called "userId".
    return (
        <>
            <div><h2> Details About User {userId}:</h2></div>
        </>
      
    )
}

export default UserDeatails