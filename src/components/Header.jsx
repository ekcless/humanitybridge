import styled from 'styled-components'

const HeaderContainer = styled.header`
  height: 80px;
  background: rgba(20, 20, 40, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const LogoSymbol = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease;

  &:hover {
    transform: rotate(180deg);
  }
`

const LogoIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2px;
    right: -2px;
    height: 2px;
    background: white;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -2px;
    bottom: -2px;
    width: 2px;
    background: white;
  }
`

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`

const MainTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(45deg, #ffffff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
`

const Subtitle = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 2px;
  text-transform: uppercase;
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    &:after {
      width: 100%;
    }
  }
`

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={scrollToTop}>
        <LogoSymbol>
          <LogoIcon />
        </LogoSymbol>
        <LogoText>
          <MainTitle>Humanity Bridge</MainTitle>
          <Subtitle>Global Impact</Subtitle>
        </LogoText>
      </LogoContainer>
      <Nav>
        <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection('impact')}>Impact</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header