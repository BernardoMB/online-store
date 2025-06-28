import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} Your Store Name
    </footer>
  );
};

export default Footer;
