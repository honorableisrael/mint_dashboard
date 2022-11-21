export const GuestGuard = ({ children }) => {
  const user_token = localStorage.getItem("auth_token");
  if (user_token) {
    return window.location.assign("/admin/dashboard");
  }
  return <div>{children}</div>;
};

export const AuthGuard = ({ children }) => {
  const user_token = localStorage.getItem("auth_token");
  if (!user_token) {
    if (window.location.pathname !== "/") {
      const redirectUrl = window.location.pathname;
      return window.location.assign("/login?redirect=" + redirectUrl);
    }
    return window.location.assign("/login");
  }
  return <div>{children}</div>;
};
