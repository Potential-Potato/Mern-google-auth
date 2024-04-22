import { Link } from 'react-router-dom';

const Home = (userDetails) => {
    const user = userDetails.user
    const logout = () => {
        window.open(
            `http://localhost:8080/auth/logout`, "_self"
        )
    }

  return (
        <div>
            <h1>Home</h1>
            <div>
                <div>
                    <h2>Profile</h2>
                    <img src={user.picture} alt="User Profile" />
                    {Object.keys(user).map((key) => (
                        <div key={key}>
                            <label>{key}</label>
                            <input
                                type="text"
                                defaultValue={user[key]}
                                placeholder={key}
                                readOnly
                            />
                        </div>
                    ))}
                    <button onClick={logout}>Log Out</button>
                    <Link to={'/post'}>post</Link> 
                </div>
            </div>
        </div>
  )
}

export default Home