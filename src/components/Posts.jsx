import React from 'react'

function Posts({appIsLoading, blogData, postsPerPage, currentPage}) {
    if(appIsLoading){
        return <div>App Is Loading</div>
    }
    const firstViewablePostIndex = postsPerPage * currentPage;
    const lastViewablePostIndex = firstViewablePostIndex + postsPerPage;
console.log(firstViewablePostIndex + "  "+ lastViewablePostIndex)
    const blogDataSlice = blogData.slice(firstViewablePostIndex, lastViewablePostIndex);
console.log(blogDataSlice.length);
  return(
    <div className="posts"> 
        {    
            blogDataSlice.map((post, index)=>{
              return  <div className="post" key={post.id}>
                    <h3 className="post-title">{post.title.slice(0, 15)}</h3>
                    <p className="post-body">{post.body}</p>
                </div>
            })
        }
    </div>
    );
}
export default Posts