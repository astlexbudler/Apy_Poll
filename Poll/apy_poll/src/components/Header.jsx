import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLinkClick = (location) => (e) => {
        navigate(location);
    }

    return (
        <div>
            <h1>APY Poll</h1>
            <ul style={{ 'listStyleType': 'none', 'listStylePosition': 'inside', 'padding': '0' }}>
                <li style={{ 'display': 'inline', 'marginRight': '10px' }}>
                    <a onClick={handleLinkClick('/')}>Main</a>
                </li>
                <li style={{ 'display': 'inline', 'marginRight': '10px' }}>
                    <a onClick={handleLinkClick('/check')}>Check</a>
                </li>
                <li style={{ 'display': 'inline', 'marginRight': '10px' }}>
                    <a onClick={handleLinkClick('/calc')}>Calc</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;