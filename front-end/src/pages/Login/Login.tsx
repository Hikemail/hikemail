import axios from "axios"
import { useState } from 'react'
import './Login.css'
import { BrowserRouter as Routers, Routes , Route, Navigate } from 'react-router-dom'
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Login(){

  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const[emailError, setEmailError] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const[passwordError,setPasswordError]= useState("")
//  const navigate = useNavigate();

  const onButtonClick = () =>{
    setEmailError("")
    setPasswordError("")

    if("" === email){
      setEmailError("Please enter your email")
      return
    }

    if("" === password)
    {
      setPasswordError("Please enter a password")
      return
    }
    if(password.length<7){
      setPasswordError("Password must be 8 character or longer")
      return
    }

    if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      setEmailError("Please enter a valid email address")
      return
    }
   
    if(email){
      return(
      <>
      {
        <Routers>
          {
          <Routes>
            <Route path='/' element={<Dashboard />}>
            </Route>
          </Routes>
    }
        </Routers>
      }
       
      </>
      )
    }else{
      return <Navigate to='/Component/Login/Login'/>
    }
  //navigate("../Home")

  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  axios
  .post("http://localhost:5178/login", {email, password})
  .then(response => {
    console.log(response)
    // Handle response
  })

    return(
    <div>
    <div style={{ marginBottom: '450px'}}>
    <h1 style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: 100, fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>hike</h1>
    </div>
    <div className="login-box">
        <form action="" id="login" method="post" onSubmit={handleSubmit}>
            <div className="user-box">
                {/* <label for="email"> Email </label> */}
                <input  
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder='Enter email address here' 
                  onChange={e=> setEmail(e.target.value)}
                  className={"user-box"}      
                />
            <label className='errorLabel'>{emailError}</label>
            </div>

            <div className="user-box">
            <input 
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder='Enter password here'
            onChange={e=>setPassword(e.target.value)}
            className={'user-box'}
            />
            <label className='errorLabel'>{passwordError}</label>
            </div>

            <input onClick={onButtonClick}
            className={"inputButton"}
            type="button"      
            value={"LOGIN"}
            />
            <div style={{ textAlign: 'center'}}>
            <p>Don't have an account yet? <a href="/SignUp">Sign up!</a></p>
            </div>
        </form>
 </div>
</div>    
)
}

export default Login