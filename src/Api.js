import React ,{useState,useEffect} from 'react';
import './App.css';

function Card() {
    const [user,setUser] = useState([]);

    const fetchData = async()=>{
    try{
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        console.log(data);
        setUser(data);

    }catch(error)
    {
        console.log(error);
    }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <h1>Api Call</h1>
        <div className="row">
          {user.map(data => (
            <div className="card">
           <h3>{data.login}</h3>
           <h3>{data.node_id}</h3>
           <h3>{data.followers_url}</h3>
           <div className="avatar">
                    <img
                      src={data.avatar_url}
                      className="card-img-top"
                      alt=""
                    />
          </div>
          </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card