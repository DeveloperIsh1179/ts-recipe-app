import { Routes, Route } from 'react-router-dom';
import Navigation from 'routes/navigation/navigation.component';
import Home from 'routes/home/home.component';
import LoggedIn from 'components/logged-in/logged-in-component';
import Authentication from 'routes/authentication/authentication.component';
import './App.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="loggedIn/:id" element={<LoggedIn />} />
      </Route>
    </Routes>
  );
}

export default App;
