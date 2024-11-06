import { useState, useEffect } from 'react'
import Posts from './components/Posts'
import PaginationBar from './components/PaginationBar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [blogData, setBlogData] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [appIsLoading, setAppIsLoading] = useState()

  useEffect(() => {
      const fetchPosts = async() => {
          setAppIsLoading(true)
          const res = await fetch("https://jsonplaceholder.typicode.com/posts")
          const data = await res.json();
          setBlogData(data)
          setAppIsLoading(false)
      } 
      fetchPosts();
    }, [])

  return (
    <div className="container">
        <h1 className="main-heading">React Pagination</h1>
        
        <Posts appIsLoading={appIsLoading} blogData={blogData} postsPerPage={postsPerPage} currentPage={currentPage}/>
        <PaginationBar appIsLoading={appIsLoading} blogData={blogData} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default App
