
import Bloglist from '../Bloglist'
import useCustomFetch from '../CustomFetch'

export const AllBlogs = () => {
  
   const { datas, IsFetchPending, isError } = useCustomFetch("http://localhost:8000/blogs")

    return(
        <>
            <div>
                <h2>Checking out this list and setting your goals in building the finest gaming blog.</h2>
               
                {/* Conditional Templating for fetch status */}
                {IsFetchPending && <div><h2>Data is loading....</h2></div>}
                {/* so here we use conditional templationg beacuse we want to render Data on the browser */}
      
                {/* Conditional Templating for error */}
                {isError && <div><h3>{ isError }</h3></div>}
                {/* so here we use conditional templationg beacuse we want to render Error message on the browser if there is any error */}
      
                {/* Conditional Templating for Bloglist */}
                {datas && <Bloglist blogs={datas} title="Gaming Blogs"/>}
                {/* This statement means that the Bloglist component will only be rendered if blogs is truthy (i.e., not null, undefined, false, 0, NaN, or an empty string). */}

                
            </div>
        </>
    )
}