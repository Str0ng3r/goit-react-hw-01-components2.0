import { UserProfile } from "./profile-comp/profile";
import { userData } from "./profile-comp/user";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserProfile userData></UserProfile>
      React homework template
    </div>
  );
};
