import { Outlet } from 'react-router'
import NavBar from './components/nav-bar/nav-bar'
import './App.css'

function App() {
return (
        <div>
           <NavBar />
          <main>
            <Outlet /> 
          </main>
          
        </div>
      );
}

export default App
