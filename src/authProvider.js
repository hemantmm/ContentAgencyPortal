
const authProvider = {
  login: ({ username }) => {
    const roles = {
      admin: 'admin',
      strategist: 'contentStrategist',
      editor: 'editor',
      writer: 'writer'
    };
    const role = roles[username] || 'guest';
    localStorage.setItem('auth', JSON.stringify({ username, role }));
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    return Promise.resolve(auth ? auth.role : 'guest');
  },
};

export default authProvider;
