import { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState(' ')
    const [preview, setPreview] = useState(' ')
    const [body, setBody] = useState(' ')
    const [author, setAuthor] = useState(' ') 

    const [isPending, setPending] = useState('false')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, preview, author, body }
        // console.log(blog)
        setPending(true)
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
               console.log("Blog Added Successfully")
            setPending(false)
          })
         
    }

    return (
  <>
     <div className='create-blog'>
      <h2>Add new blogs content here</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog Title
        </label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
                    
        <label>
          Blog Preview
        </label>
        <textarea required value={preview} onChange={(e) => setPreview(e.target.value)}></textarea>
                    
        <label>
          Blog Body
        </label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                    
        <label>
          Blog Author
        </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='Onkar'>
            Onkar
          </option>
          <option value='Rishi'>
            Rishi
          </option>
          <option value='Harshal'>
            Harshal
          </option>
          <option value='Manish'>
            Manish
          </option>
        </select>
                    
        {isPending && <button>Add Blog</button>}
        {!isPending && <button disabled>Adding the Blog</button>}
      </form>
     </div>
   </>
  )
}

export default Create
