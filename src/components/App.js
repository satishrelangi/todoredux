import React ,{useState}from 'react'
import Header from './Header';
import Nav from './Nav';
import TodoApp from './TodoApp';
import './app.css';
const App = () => {
    const [usna, setUsna] = useState('');
    const userHandler = (userr)=>{
        setUsna(userr);
    }
    const userHandler2 = (userr)=>{
        setUsna(userr);
    }
    return(
        <>
            { usna.length>0 ? <div> <Nav navUser={usna} userHandler2={userHandler2}/> <TodoApp /></div> : <Header userHandler={userHandler}/> }
        </>
    )
}
export default App;