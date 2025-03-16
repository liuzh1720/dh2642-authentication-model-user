import {LogoutView} from "../views/logoutView"
import {auth} from "../firestoreModel"

import { signOut } from "firebase/auth"

export function Logout(){
  function onLogoutACB(){ signOut(auth).catch(console.error);}
  return <LogoutView onLogout={onLogoutACB} />
}