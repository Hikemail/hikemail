import axios from "axios"
import { useState } from 'react'
import './SignUp.css'
import background from "../../assets/stacked-peaks-haikei.svg";
import { BrowserRouter as Routers, Routes , Route, Navigate } from 'react-router-dom'
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SignUp(){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const[passwordError, setPasswordError] = useState("")
//  const navigate = useNavigate();

  const onButtonClick = () =>{
    setFirstNameError("")
    setLastNameError("")
    setUsernameError("")
    setEmailError("")
    setPasswordError("")

    if("" === firstName)
    {
      setFirstNameError("Please enter your first name")
      return
    }
    if("" === lastName)
    {
      setLastNameError("Please enter your last name")
      return
    }
    if("" === username)
    {
      setUsernameError("Please enter your username")
      return
    }
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
      return <Navigate to='/Component/SignUp/SignUp'/>
    }
  //navigate("../Home")

  }

  
  const handleSubmit = e => {
    e.preventDefault()
  }

  axios
  .post("http://localhost:5178/signup", {email, password})
  .then(response => {
    console.log(response)
    // Handle response
  })

    return(
    <div>
    <div style={{backgroundImage: `url(${background})`}}></div>
    <div style={{ marginBottom: '450px'}}>
    <h1 style={{fontWeight: 'bolder', fontStyle: 'italic', fontSize: 100, fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>hike</h1>        
    </div>    
    <div className="signUp-box">
        <form>
            {/* firstName */}
            <div className="signUp-user-box">
                <input  
                value={firstName}
                placeholder='Enter your first name here' 
                onChange={e=> setFirstName(e.target.value)}
                className={"signUp-user-box"}      
            />
            <label className='errorLabel'>{firstNameError}</label>
            </div>

            {/* lastName */}
            <div className="signUp-user-box">
            <input 
            value={lastName}
            placeholder='Enter your last name here'
            onChange={e=>setLastName(e.target.value)}
            className={'signUp-user-box'}
            />
            <label className='errorLabel'>{lastNameError}</label>
            </div>

            {/* username */}
            <div className="signUp-user-box">
            <input 
            value={username}
            placeholder='Enter your hikemail username here'
            onChange={e=>setUsername(e.target.value)}
            className={'signUp-user-box'}
            />
            <label className='errorLabel'>{usernameError}</label>
            </div>
            
            {/* email */}
            <div className="signUp-user-box">
                <input  
                value={email}
                placeholder='Enter email address here' 
                onChange={e=> setEmail(e.target.value)}
                className={"signUp-user-box"}      
            />
            <label className='errorLabel'>{emailError}</label>
            </div>

            {/* password */}
            <div className="signUp-user-box">
            <input 
            value={password}
            placeholder='Enter password here'
            onChange={e=>setPassword(e.target.value)}
            className={'signUp-user-box'}
            />
            <label className='errorLabel'>{passwordError}</label>
            </div>

            <input onClick={onButtonClick}
            className={"signUpButton"}
            type="signButton"      
            value={"SIGN UP"}
            />
        </form>
 </div>
</div>    
)
}

export default SignUp