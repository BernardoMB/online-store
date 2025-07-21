import { useState } from 'react';
import './Footer.css'
import TermsAndConditionsModal from '../TermsAndConditionsModal/TermsAndConditionsModal';
import StoreIcon from '../StoreIcon';
import { Center, Flex } from '@chakra-ui/react';

const Footer: React.FC = () => {
  const [isTermsAndConditionsOpen, setIsTemrsAndConditionsOpen] = useState(false);

  return (
    <footer className="site-footer">
      <Flex direction={'column'} alignItems={"center"}>
        
      <StoreIcon style={{color: 'white'}}></StoreIcon>
      © {new Date().getFullYear()} Hue & Hoot
      </Flex>
      <br></br>
      <div>
        <a className="link-button" onClick={() => setIsTemrsAndConditionsOpen(true)}>Terms And Conditions</a>
        {isTermsAndConditionsOpen && <TermsAndConditionsModal onClose={() => setIsTemrsAndConditionsOpen(false)} />}
      </div>
    </footer>
  );
};

export default Footer;
