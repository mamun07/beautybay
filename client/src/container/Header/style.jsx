import makeStyled from 'styled-components';

export const HeaderNav = makeStyled.div`
    display: flex;
    padding: var(--space15) 0;
`;
export const HeaderLogo = makeStyled.div`
    flex: 3;
    text-align: left;
    svg{
        font-size: 40px;
    }
`;
export const HeaderMenu = makeStyled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
`;
export const MobileMenu = makeStyled.div``;
