import { useState, useEffect } from "react";
import axios from "axios";  
import User from "./components/User";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import AddDialog from "./components/AddDialog";


function App() {

  const [data, setData] = useState()
  const [comments, setComments] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [open,setOpen] = useState(false)
  useEffect(()=>{
    axios({
      url: 'https://jsonplaceholder.typicode.com/comments',
      method: 'GET',
      params: {
        _limit: 30
      }
    }).then((response)=>{
      setComments(response.data)
    })
  },[])

  useEffect(()=>{
    axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      
    }).then((response)=>{
      setData(response.data)
      setFilteredData(response.data)
    })
  },[])
  

  useEffect(()=>{
    setFilteredData(data)
  },[data])

  const onSearchInput = (input)=>{
    setFilteredData(data.filter((user)=>{
      return user.name.includes(input.target.value)
    }))
  }

  function deleteRobot(robotIndex){
    setData((data)=>{
        return data.filter((_,index)=>{
            return robotIndex !== index;
        })
    })
  }

  return (
    <div>
       <h1 style={{textAlign:"center"}}>Robotic Users</h1>
       <TextField id="outlined-basic" label="Search user" variant="outlined" onChange={onSearchInput} />
       <Button onClick={()=>{
        setOpen(true)
       }}>Add user</Button>
       <AddDialog open={open} setOpen = {setOpen} setData={setData}/>
       <div className="users-container">
      {
        filteredData?.map((users,index)=>{
          return <User name={users.name} city = {users.address.city} 
                      company = {users.company.bs} email = {users.email} 
                      phone= {users.phone} comment={comments[index].body} 
                      deleteRobot={()=>deleteRobot(index)}/>
        })
      }
    </div>
    </div>
  );
}

export default App;
