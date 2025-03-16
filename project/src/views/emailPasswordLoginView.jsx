// a framework-independent login form, works with any JSX framework
// it uses browser state (document.getElementById(x).value) to retrieve the username and password when the form is submitted

// TODO: instead of browser state, a framework-specific implementation could use component state or local application state (see presenters)

// TODO: show the login error from a prop, if any

// TODO it should show UI for choosing between sign in and sign up, and send it as custom event parameter

// TODO it could use a <form> for better user interaction

export function EmailPasswordLoginView(props){
  return <div>
    email:    <input id="loginEmail"    type="text" />
    password: <input id="loginPassword" type="password" />
    <button onClick={function submitACB(){
        props.onLogin(document.getElementById("loginEmail").value, 
                       document.getElementById("loginPassword").value)
    }}>submit!</button>
   </div>;
}