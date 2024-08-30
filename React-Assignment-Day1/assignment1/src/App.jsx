import './App.css'
import Greeting from "./Greeting.jsx"
import ProfileCard from "./ProfileCard.jsx"
import Status from './Status.jsx'
import Counter from './Counter.jsx'

function App() {

  return (
   <>
    <Greeting name="Nishant"/>
    <ProfileCard name="Nishant" age="18" location="Udaipur"/>
    <Status state={true}/>
    <Counter/>
   </>
  )
}

export default App
