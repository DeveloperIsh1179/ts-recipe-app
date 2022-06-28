import { ReactComponent as Chef } from 'assets/chef-svgrepo-com.svg';
import { Outlet } from 'react-router-dom';
import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

function Navigation(): JSX.Element {
  return (
    <div>
      <NavigationContainer>
        <LogoContainer to="/">
          <Chef />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="search">SEARCH</NavLink>
        </NavLinksContainer>
        <NavLinksContainer>
          <NavLink to="/auth">LOG IN</NavLink>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </div>
  );
}

export default Navigation;
