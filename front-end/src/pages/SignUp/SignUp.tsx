import "./SignUp.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

interface Inputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  username: yup.string().required().min(6).max(20,
    "Username must be between 6 and 20 characters"),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(32),
  confirmPassword: yup.string().required().oneOf([yup.ref("password")], "Passwords must match"),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post("https://api.hikemail.net/users", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        // Handle response
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-box">
        <div className="signup-info-container">
          <div className="signup-info">
            <h1>Sign Up</h1>
            <p>
              Already have an account?{" "}
              <a href="/Component/Login/Login">Log in here</a>
            </p>
          </div>
        </div>
        <div className="signup-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="signup-user-input">
              <div className="signup-email-username">
                <input
                  placeholder="username"
                  {...register("username", { required: true })}
                />
                <span className="signup-static-mail">
                  @hikemail.net
                </span>
              </div>
              <span className="error-text">
                {errors.username && "This field is required"}
              </span>
            </div>
            <div className="signup-user-input">
              <input placeholder="email" {...register("email")} required />
              <span className="error-text">{errors.email?.message}</span>
            </div>

            <div className="signup-user-input">
              <input
                placeholder="password"
                {...register("password")}
                required
              />
              <span className="error-text">{errors.password?.message}</span>
            </div>

            <div className="signup-user-input">
              <input
                placeholder="confirm password"
                {...register("confirmPassword")}
                required
              />
              <span className="error-text">
                {errors.confirmPassword?.message}
              </span>
            </div>

            <div className="signup-user-input">
              <input type="submit" className="signup-button" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
