import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    if(user) dispatch({ type: 'LOGIN', data: user })
  }, [dispatch, user])

  const checkAuth = () => user ? true : false

  return { checkAuth }
}

export default useAuth;
