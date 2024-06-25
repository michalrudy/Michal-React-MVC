export function login(username, password, setUser) {
    
    if (username === 'user' && password === 'password') {
      setUser(username);
      return true;
    }
    return false;
  }
  
  export function logout(setUser) {
    setUser(null);
  }
  