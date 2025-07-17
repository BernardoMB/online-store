import { useState } from 'react';
import './Footer.css'
import TermsAndConditionsModal from '../TermsAndConditionsModal/TermsAndConditionsModal';

const Footer: React.FC = () => {
  const [isTermsAndConditionsOpen, setIsTemrsAndConditionsOpen] = useState(false);

  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} Hue & Hoot
      <br></br>
      <br></br>
      <div>
        <a className="link-button" onClick={() => setIsTemrsAndConditionsOpen(true)}>Terms And Conditions</a>
        {isTermsAndConditionsOpen && <TermsAndConditionsModal onClose={() => setIsTemrsAndConditionsOpen(false)} />}
      </div>
    </footer>
  );
};

export default Footer;
