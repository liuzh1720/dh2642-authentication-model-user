// a "login with..." view. Can be used for "continue with Google", "continue with Facebook" etc.

// TODO: show the login error from a prop, if any
export function LoginWithView(props){
  return <a href="#" onClick={props.onLogin}>Continue with {props.with}</a>;
}