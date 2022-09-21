import makeStyled from 'styled-components';

export const HeaderNav = makeStyled.div`
    display: flex;
`;
export const HeaderLogo = makeStyled.div`
    flex: 3;
    text-align: left;
`;
export const HeaderMenu = makeStyled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 6;
    text-transform: uppercase;
`;
export const HeaderInfo = makeStyled.div`
    flex: 3;
    text-align: right;
`;
