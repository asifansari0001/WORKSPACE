import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">workspace</h1>
                    <p>
                        This is a brief description about the website. It provides valuable information and resources to its visitors.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; +123-456-789</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; info@mywebsite.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <br />
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <br />
                    <form action="#" method="post">
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
                        <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                        <button type="submit" className="btn btn-big">
                            <i className="fas fa-envelope"></i>
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; workspace.com | Designed by workspace
            </div>
        </footer>
    );
};

export default Footer;
