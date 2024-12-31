import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'Vasya' },
  { id: 'u5', name: 'Fedya' },
  { id: 'u6', name: 'Zyuzya' },
  { id: 'u7', name: 'Bagram' },
  { id: 'u8', name: 'Ahmed' },
  { id: 'u9', name: 'Oleg' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
