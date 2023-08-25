import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="text-muted py-5">
            <Container>
                <p className="float-end mb-1">
                    <a href="#">Back to top</a>
                </p>
                <p className="mb-1">This App Store is free © copywrite2023, please download !</p>
                <p className="mb-0">New Application ? <a href="/">Visit the homepage</a> or read our <a href="#">getting started guide</a>.</p>
            </Container>
        </footer>
    );
}
export default Footer;