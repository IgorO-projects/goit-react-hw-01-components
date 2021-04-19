import Container from './components/Container/Container.jsx'
// Task 01
import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile.jsx';
// Task 02
import Section from './components/Statistics/Section.jsx';
import StatisticsList from './components/Statistics/Statistics-list.jsx';
import statisticalData from './components/Statistics/statistical-data.json';
// import Statistic from './components/Statistics/Statistic.jsx';

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
    </>
  );
}

export default App;
