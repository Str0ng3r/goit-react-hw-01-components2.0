import { UserProfile } from "./profile-comp/profile";
import { userData } from "./profile-comp/user";
import { AllStatistics } from "./statistics-comp/statistics-code";
import dataStat from './statistics-comp/data'
import { ListFriends } from "./friends-comp/friends";
import friendsData from './friends-comp/friendsdata'
import { TransactionTable } from "./tranzaction-comp/transaction";
import transDate from './tranzaction-comp/transactions'
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <UserProfile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats}>
      </UserProfile>
      <AllStatistics statistics={dataStat}></AllStatistics>
<ListFriends dataFriend={friendsData}></ListFriends>
<TransactionTable transdata={transDate}></TransactionTable>
    </div>
  );
};
