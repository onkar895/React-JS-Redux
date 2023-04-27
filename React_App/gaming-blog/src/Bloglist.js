// Props:
// 1. In React, components are able to use props, or “properties”, to display and share data throughout the application.
// 2. In other words, props is the information that gets passed from one component to another.
// 3. Parent components can pass props to their child components, but not the other way around.
// 4. Props can be many data types, including: Numbers, Strings, Functions, Objects

const Bloglist = ({ blogs, title, deleteBlog }) => {
  // This is a Bloglist functional component that takes in three props: "blogs", "title", and "deleteBlog".
  return (
    <div className='blog-list'>
      <h1>{title}</h1>
      {blogs.map((blog) => (
                                            // The map() method calls the specified function for every array element and returns the new array. This method doesn't change the original array.
                                                <div className="blog-preview" key={blog.id}>
                                                      <h2>Title: {blog.title}</h2>
                                                      <p>Author: {blog.author}</p>
                                                      <p>{blog.body}</p>
                                                      <br />
                                                
                                                      <span>
                                                         <button className="delete-button" onClick={() => deleteBlog(blog.id)}>
                                                             Delete
                                                          </button>
                                                      </span>
                                                </div>
                                           ))}
    </div>
  )
}

export default Bloglist

//  The export default keywords specify the main component in the file.

// So here, we have created Bloglist component and the template we have created here in bloglist.
// The main purpose of this, is to grab all the data from the parent component which is Homepage in this case.
// It will retrurn all the data , export the data to the Homepage nad it will be render when required.
