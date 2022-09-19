import makeStyled from 'styled-components';

export const NavBar = makeStyled.div`
    ul{
        margin: 0;
        padding: 0;
        li{
            float: left;
            list-style: none;
            a{
                color: var(--primary-color)
            }
        }
    }
`;
