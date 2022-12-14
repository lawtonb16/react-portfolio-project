import styled from "styled-components";

const FooterWrapper = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 50px;
    background-color: orange;
    align-items: center;
    flex-direction: column;
`;
const FooterText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 202, 53, 255);
    > a {
        color: brown;
    }
`;
const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>
                Links
                <a href="https://store.steampowered.com/app/1794680/Vampire_Survivors/">
                    Game Site
                </a>
            </FooterText>
        </FooterWrapper>
    );
};

export default Footer;
