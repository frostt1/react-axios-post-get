import './NewPost.css'

import { useState } from 'react'
import { useNavigate }  from 'react-router-dom'
import { api } from '../../api'

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleBody = (e) => {
    setBody(e.target.value)
  }


  const createPost = async (e) => {
    e.preventDefault()
    let json = await api.addNewPost(title, body, 1)
    if(json.id) {
      alert('Post adicionado com sucesso')
    } else {
      alert('Ocorreu um erro')
    }
  }
  
  return (
    <div className='new-post'>
      <h2>Inserir novo Post:</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" placeholder='Digite o título'
          onChange={handleTitle} />
        </div>
        <div className="form-control">
          <label htmlFor="title">Conteúdo:</label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo'
          onChange={handleBody}></textarea>
        </div>
        <input type="submit" className='btn' value='Criar Post' />
      </form>
    </div>
  )
}

export default NewPost