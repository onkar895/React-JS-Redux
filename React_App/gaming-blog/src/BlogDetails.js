import { useParams } from 'react-router-dom'
import useCustomFetch from './CustomFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const {datas:blog, isError, IsFetchPending} = useCustomFetch('http://localhost:8000/blogs/' + id)
    return (
      <>
        <div className='blog-details'>
          <h2>Blog Details - {id}</h2>
             
                {IsFetchPending && <div><h2>Data is loading....</h2></div>}
                {isError && <div>{isError}</div>}
                {blog && (
                    <article>
                        <h3>{blog.title}</h3>
                        <p>Author: {blog.author}</p>
                        <p>{ blog.body}</p>
                    </article>
                 )}
        </div>
     </>
  )
}

export default BlogDetails
