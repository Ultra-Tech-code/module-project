export const signUp = (fullName, username, password) => {
    const userData = { fullName, username, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData;
  };

  
 