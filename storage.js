export const signUp = (fullName, username, password) => {
    const userData = { fullName, username, password };
    saveUserToLocalStorage(userData);
    return userData;
  };

  export const saveUserToLocalStorage = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  
 