
import { useState } from 'react';
import './App.css'
import Post from './components/post/post';

function App() {
  const [tela, setTela] = useState("login");
  const [username, setUsername] = useState("");

  return (
    <>
      {tela === "login" && (
        <div className="loginContainer">
          <div className="loginContent">
            <h2>Welcome to CodeLeap Network!</h2>
            <p>Please enter your username</p>
            <input
              type="text"
              placeholder="John doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="action">
              <button
                className="loginButton"
                type="button"
                onClick={() => setTela("post")}
                disabled={username.trim() === ""}
              >
                ENTER
              </button>
            </div>
          </div>
        </div>
      )}

      {tela === "post" && (
        <Post username={username} />
      )}
    </>
  );
}

export default App
