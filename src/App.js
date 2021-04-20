import Container from './components/Container/Container.jsx'
// Task 01
import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile.jsx';
// Task 02
import Section from './components/Statistics/Section.jsx';
import statisticalData from './components/Statistics/statistical-data.json';
import StatisticsList from './components/Statistics/Statistics-list.jsx';
// Task03
import friends from './components/Friends/friends.json';
import FriendList from './components/Friends/FriendList.jsx';
// Task 04
import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'


function App() {
  return (
    <>
    <Container>
      <Profile 
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    </Container>

    <Container>
    <Section>
      <StatisticsList statisticalData={statisticalData}/>
    </Section>
    </Container>

    <Container>
      <FriendList friends={friends}/>
    </Container>

    <Container>
      <TransactionHistory transactions={transactions}/>
    </Container>
    </>
  );
}

export default App;
