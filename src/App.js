import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {Login} from './Components/Login';
import {Register} from './Components/Register'
import {Sidebar} from './Components/Sidebar'
import {Taskdiv} from './Components/Styled/Task'
import {Home} from './Components/Home'
import {Addtodo} from './Components/Addtodos'
import {Protector}from './Components/Protector'
import {Edittodos} from './Components/Edittodos'
function App() {
  return (
  
<>



<Routes>

<Route path='/add' element={<Addtodo />} />
<Route path='/login' element={<Login />} />
<Route path='/register' element={<Register />} />

<Route element={<Protector/>} >

<Route path='/' element={<Home />} />

<Route path='/todos/:id' element={<Edittodos />} />


</Route>


</Routes>


{/* <Home/> */}
{/* <Addtodo/> */}

{/* <Login/>

<Register/>
<Sidebar/>
<Taskdiv/> */}

</>





  );
}

export default App;
