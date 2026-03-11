
import { useState } from 'react';
import './App.css'
import Post from './components/post/post';

function App() {
  const [tela, setTela] = useState("login");

  return (
    <>
      {tela === "login" && (
        <div className="loginContainer">
          <div className="loginContent">
            <h2>Welcome to CodeLeap Network!</h2>
            <p>Please enter your username</p>
            <input type="text" placeholder="John doe" />
            <div className="button">
              <button
                className="loginButton"
                type="button"
                onClick={() => setTela("post")}
              >
                ENTER
              </button>
            </div>
          </div>
        </div>
      )}

      {tela === "post" && (
        <Post />
      )}
    </>
  );
}

export default App
