import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <footer>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate(1)}>Next</button>

            <p>Election Voting System 2026</p>
        </footer>
    );
}

export default Footer;