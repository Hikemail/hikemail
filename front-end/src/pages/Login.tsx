import { useState } from 'react'
import './Login.css'
import tempHikeLogo from './static/tempHikeLogo.png'
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
            <Route path='/' element={<HomePage />}>

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

    return(
    <div>
    <h1 style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: 100, marginBottom: '450px', fontFamily: 'Arial, sans-serif' }}>HIKE</h1>
    <div className="login-box">
        <form>
            <div className="user-box">
                <input  
                value={email}
                placeholder='Enter email address here' 
                onChange={ev=> setEmail(ev.target.value)}
                className={"user-box"}      
                
                />
            
            <label className='errorLabel'>{emailError}</label>
            </div>
            <div className="user-box">
            <input 
            value={password}
            placeholder='Enter password here'
            onChange={ev=>setPassword(ev.target.value)}
            className={'user-box'}
            
            />
            <label className='errorLabel'>{passwordError}</label>
            </div>
            <input onClick={onButtonClick}
            className={"inputButton"}
            type="button"      
            value={"Submit"}
            />
            <p>Don't have an account yet? <a href="#"></a>Sign up!</p>
        </form>
 </div>
</div>    
)
}

export default Login