import { useSearchParams } from "react-router-dom"
//  The useSearchParams hook is used to read and modify the query string in the URL for the current location.
//  Like React's own useState hook, useSearchParams returns an array of two values: 
//  'the current location's search params' and a 'function' that may be used to update them.

const Users = () => {
    const [SearchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = SearchParams.get('filter') === 'active'
    return (
        <>
            <h1>Dynamic Routes</h1>
            <div>
                <h2>User 1</h2>
                <h2>User 2</h2>
                <h2>User 3</h2>
            </div>
            <div className="Set-Button">
                 <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button> <br/> <br/>
                 <button onClick={() => setSearchParams({ })}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? (<h2>Showing Active Users</h2>) : (<h2>Showing All Users</h2>)
            }
        </>
    )
}

export default Users