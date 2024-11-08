import { useState } from 'react'
import './App.css'

import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
