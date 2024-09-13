export const useAuth = () => {
  const login = (username) => {
    localStorage.setItem("user", JSON.stringify(username));
  };

  return {
    login,
  };
};
