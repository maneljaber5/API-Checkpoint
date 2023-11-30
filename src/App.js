import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Userlist from './component/Userlist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [users, setusers] = useState([]);
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
  }, [])
  
  return (
   <>
   <Userlist users={users} />
   </>
  );
}

export default App;
