import { UserProfile } from "./profile-comp/profile";
import { userData } from "./profile-comp/user";
import { AllStatistics } from "./statistics-comp/statistics-code";
import './profile-comp/profile-compstyles.css'
import './statistics-comp/stats-styles.css'
import dataStat from './statistics-comp/data'
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
      <UserProfile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats}>
      </UserProfile>
      <AllStatistics statistics={dataStat}></AllStatistics>

    </div>
  );
};
