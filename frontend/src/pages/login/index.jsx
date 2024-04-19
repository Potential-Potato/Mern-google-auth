import { Link } from 'react-router-dom'

const Login = () => {
    const googleAuth = () => {
        window.open(
            `http://localhost:8080/auth/google/callback`, "_self"
        )
    }

  return (
    <div>
        <h1>Log in Form</h1>
        <div>
            <div>
               <input type='text' placeholder='Email'/>
               <input type='password' placeholder='Password'/>
               <button>Log In</button>
               <p>or</p>
               <button onClick={googleAuth}>
                <span>Sign in with Google</span>
               </button>
               <p>
                 New here? <Link to="/signup">Sign Up</Link>
               </p>
            </div>
        </div>
    </div>
  )
}

export default Login