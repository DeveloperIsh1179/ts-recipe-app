import { ReactComponent as Chef } from 'assets/chef-svgrepo-com.svg';
import { Outlet } from 'react-router-dom';
import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  NavLinkContainer,
} from './navigation.styles';

function Navigation(): JSX.Element {
  return (
    <div>
      <NavigationContainer>
        <LogoContainer to="/">
          <Chef />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer>
            <NavLink to="search">SEARCH</NavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink to="/auth">LOG IN</NavLink>
          </NavLinkContainer>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </div>
  );
}

export default Navigation;
