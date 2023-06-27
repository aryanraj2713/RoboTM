import './App.css'
import Card from './components/Landing/Card'
import { robots } from './Robots';
import Navbar from './components/Landing/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-r from-purple-500 to-pink-500 justify-center items-center'>
        <div className=' mx-10 flex flex-row justify-center items-center'>
          <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
          <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
          <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
          <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
            <Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
            <Card id={robots[7].id} name={robots[6].name} email={robots[6].email}/>
            <Card id={robots[8].id} name={robots[7].name} email={robots[7].email}/>
        </div>
      </div>
    </>
  )
}

export default App;
