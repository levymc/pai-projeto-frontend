import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useCustomRequest } from '../../hooks/useCustomRequest';

interface SiteConfig {
  title: string;
}

export default function NavBar() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);
  const customRequest = useCustomRequest();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customRequest.makeRequest('GET', '/site');
        setSiteConfig(response.data);
      } catch (error) {
        console.error('Erro ao carregar o siteConfig', error);
      }
    };
    fetchData();
  }, []);

  return (
    <NavBarContainer>
      <NavBarContent>
        <Logo href="/">{siteConfig ? siteConfig.title : 'Carregando ...'}</Logo>
        <NavLinks>
          <NavLink>
            <StyledLink href="/">Página Inicial</StyledLink>
          </NavLink>
          {/* Adicione mais links conforme necessário */}
          <NavLink>
            <StyledLink href="/dashboard">Dashboard</StyledLink>
          </NavLink>
        </NavLinks>
      </NavBarContent>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavLink = styled.li`
  margin-right: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;
