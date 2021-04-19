import Section from './components/Section/Section.jsx'
import Profile from './components/Profile/Profile.jsx';
import user from './components/Profile/user.json';

function App() {
  return (
    <Section>
      <Profile 
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
    </Section>
  );
}

export default App;
