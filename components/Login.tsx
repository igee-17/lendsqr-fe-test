import ImageCreate from "./ImageCreate";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import signInImage from "../assets/images/signInImage.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!password || !email) return;
    router.push("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="left">
        <div className="logo">
          <Image {...logo} alt="logo" />
        </div>
        {/* <Image {...signInImage} /> */}
        <Image {...signInImage} alt="logo" />
      </div>
      <div className="right">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p onClick={() => setShowPassword(!showPassword)}>show</p>
          </div>
          <a href="#">Forgot password?</a>
          <button type="submit" onClick={submit}>
            <div className="login">
              {/* <button type="submit">log in</button> */}
              <p>log in</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
