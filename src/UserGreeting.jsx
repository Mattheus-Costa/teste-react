function UserGreeting({isLoggedIn = false,username = "Guest"}){

    const WelcomeGreeting = <div  className="welcome-greeting" >
        <h2>Welcome back, {username}! </h2>
    </div>

    const LoginRequest = <div className="login-request">
        <h2>Please login to continue.</h2>
        </div>
    
    return(isLoggedIn ? WelcomeGreeting : LoginRequest)
    
}

export default UserGreeting