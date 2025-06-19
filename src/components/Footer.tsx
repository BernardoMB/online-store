const Footer: React.FC = () => {
  return (
    <footer style={{ height: "50px", background: "#444", color: "white", textAlign: "center", padding: "1rem" }}>
      © {new Date().getFullYear()} Your Store Name
    </footer>
  );
};

export default Footer;
