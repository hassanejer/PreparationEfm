import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Covid() {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(()=>{
      // fetch('https://disease.sh/v3/covid-19/countries')
      // .then(res => res.json())
      // .then(json =>setData(json) )
  
      axios.get('https://disease.sh/v3/covid-19/countries')
          .then(res => setData(res.data))
    })
    
    return (
      <div className="App">
        <p>{
          id
        }</p>
        
        <ul>
        {
            data.map(item => <li>
                {item.country} ------ {item.cases}
                <img src={item.countryInfo.flag} />
            </li>)
        }
        </ul>
      </div>
    );
}

export default Covid
