// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const useAuth = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   console.log('storedToken', storedToken)
//   //   if (storedToken && storedToken?.length > 0 && storedToken != 'undefined') {
//   //     setToken(storedToken);
//   //   } else {
//   //     navigate('/');
//   //   }
//   // }, [navigate, storedToken]);

//   const login = ({ newToken, refreshToken }: { newToken: string; refreshToken: string }) => {
//     localStorage.setItem('token', newToken);
//     localStorage.setItem('refreshToken', refreshToken);
//     setToken(newToken);
//     navigate('/');
//   };

//   const logout = () => {
//     localStorage.clear();
//     setToken(null);
//     navigate('/');
//     window.location.reload();
//   };

//   return {
//     token,
//     login,
//     logout,
//   };
// };

// export default useAuth;
