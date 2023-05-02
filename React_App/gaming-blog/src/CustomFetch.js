import { useState, useEffect } from 'react'
// UseState,UseEffect and Props:
// import { useState, useEffect } from 'react'
// useState: Returns the current state of the component and its setter function.

const useCustomFetch = (url) => {
  // const [blogs, setBlogs] = useState(null)
  const [datas, setDatas] = useState(null)
  const [IsFetchPending, setIsFetchPending] = useState(true)
  // We have created another state here to check whether the feach is pending or not.
  const [isError, setError] = useState(null)
  // This state is for handling the error if there is any error.

  useEffect(() => {
    setTimeout(() => {
      fetch(url) // displays a list of blogs fetched from a local server at http://localhost:8000/blogs.
        .then(response => {
          console.log(response)
          if (!response.ok) {
            throw Error('Could not fetch the data from the resources!')
          }
          return response.json()
        })
        .then(data => {
          console.log(data)
          setDatas(data)
          setIsFetchPending(false)
          setError(null)
        }
      ).catch(err => { // Handling error
        setIsFetchPending(false)
        setError(err.message)
        console.log(err.message)
      })
    }, 1000)
  }, [url]
  )
  return {datas,IsFetchPending,isError} // Passing as a object
}

export default useCustomFetch
