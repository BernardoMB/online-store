import { Container } from '@chakra-ui/react';
import './InfiniteCarousel.css'

const InfiniteCarousel: React.FC = () => {
    return (
        <>
            <Container paddingInline={'2rem'} position={'relative'} maxWidth={'80rem'} width={'100%'} marginInline={'auto'}>
                <Container as="section" backgroundImage={'url(/images/pattern_light.svg)'} borderInlineWidth={'1px'} paddingInline={'0rem'} paddingBlock={'2rem'}>
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default InfiniteCarousel;
