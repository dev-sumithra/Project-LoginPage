import React from "react";
import "./Login.css";
import Google from "../../assets/icons8-google-48.png";
import Facebook from "../../assets/icons8-facebook-48.png";
import Image from "../../assets/image(2).jpeg";

function Login() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="container-contents">
          <div className="dsplay-login">
            Login{" "}
            <span role="img" aria-label="dog">
              ✌️
            </span>
          </div>
          <p>How do i get started lorem ipsum dolor at?</p>
          <div>
            <button>
              <div className="image-icone-style">
                <img className="icon-image" src={Google} alt="google"></img>Sign
                in with Google
              </div>
            </button>
            <button>
              <div className="image-icone-style">
                <img className="icon-image" src={Facebook} alt="facebook"></img>{" "}
                Sign in with Facebook
              </div>
            </button>
          </div>
          <div className="container-login-styles">
            <hr />
            <div>
              <p>or Sign in with Email</p>
            </div>
            <hr />
          </div>
          <div className="inputboxes">
            <p>Email</p>
            <input
              className="inputboxes-style"
              type="text"
              placeholder="sumithra@12"
            />
            <p>Password</p>
            <input
              className="inputboxes-style"
              type="password"
              placeholder=""
            />
            <div className="forget-password">Forget password?</div>
            <button>Login</button>
          </div>
          <div className="text-right">@20220 Elegance All Right Reserved</div>
        </div>
      </div>
      <div>
        <img className="banner-image" src={Image} alt="Banner" />
      </div>
    </div>
  );
}

export default Login;
