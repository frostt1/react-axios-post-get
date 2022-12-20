import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Home.css'


const Home = () => {
  const { posts, loading } = useFetch()

  return (
    <div className='home'>
      <h1>Últimos posts</h1>
      {loading && <p>CARREGANDO...</p>}
      {!loading && <div>
        {posts.map((post, index) => (
        <div key={index} className='post'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
        </div>
      ))}
        </div>}
    </div>
  )
}

export default Home