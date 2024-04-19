import { Link } from 'react-router-dom'

const Signup = () => {
    const googleAuth = () => {
        window.open(
            `http://localhost:8080/auth/google/callback`, "_self"
        )
    }

  return (
    <div>
        <h1>Sign up Form</h1>
        <div>
            <div>
               <h2>Create Account</h2>
               <input type='text' placeholder='Username'/>
               <input type='text' placeholder='Email'/>
               <input type='password' placeholder='Password'/>
               <button>Sign Up</button>
               <p>or</p>
               <button onClick={googleAuth}>
                <span>Sign up with Google</span>
               </button>
               <p>
                 Already have account? <Link to="/login">Sign In</Link>
               </p>
            </div>
        </div>
    </div>
  )
}

export default Signup