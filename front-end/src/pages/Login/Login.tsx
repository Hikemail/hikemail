import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(32),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    let res = {};
    await axios
      .post("https://api.hikemail.net/users/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("user_id", response.data.rows[0].id);
        console.log(response.data.rows[0].id);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        return;
      });

  };

  return (
    <div className="login-container">
      <div className="login-form-box">
        <div className="login-info-container">
          <div className="login-info">
            <h1>Log In</h1>
            <p>
              Don't have an account?{" "}
              <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-user-input">
              <input placeholder="email" {...register("email")} required />
              <span className="error-text">{errors.email?.message}</span>
            </div>

            <div className="login-user-input">
              <input
                placeholder="password"
                {...register("password")}
                required
                type="password"
              />
              <span className="error-text">{errors.password?.message}</span>
            </div>

            <div className="login-user-input">
              <input type="submit" className="login-button" value="Log In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
