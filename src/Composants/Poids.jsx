import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Poids() {

    const [genre, setGenre] = useState('Male')
    const [taile, setTaille] = useState(null)
    const [res, setRes] = useState(null)
    const n = useNavigate()


    const handleChange =(e)=>{
        const {name,value} = e.target

        if(name == 'genre') {
            if(value =='homme'){
                setGenre('Male')
            }
             if(value=='femme'){
                setGenre('Female')
            }
        
        }else{
            setTaille(value)
        }
    }

    function handleClick(){

        if(taile < 150){
            alert('Es sofyani taller than you')
        }else{

            setRes(taile-100-((taile-150)/(genre==='Male'?4:2.5)))
            
        }

        setTimeout(()=>{
            n('/')
        },3000)

    }

  return (
    <div className='poid'>
      <label >Taille en cm</label>
      <input onChange={handleChange} type='text' name='taille' />
      <label>Genre:</label>
      <div className='genre'>
      <select name='genre' onChange={handleChange}>
        <option value="null" disabled selected>Choississez le genre</option>
        <option value="homme">Homme</option>
        <option value="femme">femme</option>
      </select>
      <p>{genre}</p>
      </div>

      <label >Poid</label>
      <input type='number' disabled value={res} />

      <button onClick={handleClick}>Calculer</button>

    </div>
  )
}

export default Poids
