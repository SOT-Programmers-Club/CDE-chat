import './App.css';
import Auth from './components/Auth';
import Cookies from 'universal-cookie';
import { useRef, useState } from 'react';
import {Chat} from './components/Chat';
const cookies = new Cookies();
//mkudlsl123
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);
  const inputRef = useRef(null)
  if (!isAuth){
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <div>
          <Chat room={room} />
        </div>
      ) : (

        <div className='log'>
          <label>Enter The chat you want to get in</label>
          <input ref={inputRef}/>
          <button onClick={() => setRoom(inputRef.current.value)} >Enter Chat</button>
        </div>
      )}
    </div>
  )
}

export default App;
