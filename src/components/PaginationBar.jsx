import React from 'react'

function PaginationBar({appIsLoading, blogData, postsPerPage, currentPage, setCurrentPage}) {
    
    if(appIsLoading){
        return <div>Loading</div>
    }
    console.log("postsPerPage " + postsPerPage);
    console.log("currentPage: " + currentPage);
    console.log("blogData.length: " + blogData.length);
    const totalPages = Math.ceil(blogData.length/postsPerPage);
    console.log("totalPages: "+totalPages);
    const pageArray = [];
    for(let p=1; p <= totalPages; p++){
        pageArray.push(p);
    }
  return (
    <div className="pagination">{
        pageArray.map((page, index) =>{
            console.log("inside pageArray.map: "+currentPage + ", " + index);
            return <button page={page} key={page} className={currentPage == page ? "active" : ""}
             onClick={()=>{
                setCurrentPage(page)
                console.log("currentPage: "+currentPage);
             }}
            >{page}</button> 
        })
    }</div>
  )
}
export default PaginationBar