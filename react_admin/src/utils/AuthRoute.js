import {Navigate,useLocation} from 'react-router-dom'

const AuthRoute  = ({children})=>{
  const isLogin = !!sessionStorage.getItem('user_id')
  const location = useLocation()
  if(!isLogin){
    return (
      <Navigate to="/login" state={{from:location}}/>
    )
  }
  return children
}

export default AuthRoute