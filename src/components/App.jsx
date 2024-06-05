import Profile from "../components/Profile/Profile";
import Statistics from "../components/Statistics/Statistics";
import FriendList from "../components/FriendList/FriendList";
import Transactions from "../components/Transactions/Transactions";
import stastics from "../data/statistics.json";
import user from "../data/user.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

function App() {
  return (
    <>      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
       title="Upload stats" stats={stastics}      
      />
      <FriendList friends={friends} />
      <Transactions transactions={transactions}  />
    </>
  
  );
}

export default App;
