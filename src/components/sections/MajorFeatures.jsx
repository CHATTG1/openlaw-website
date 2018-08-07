import React from 'react'
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/majorfeatures.module.scss';
import Wrap from '../common/Wrap';

import ExploreSVG from '../../components/svg/ExploreSVG';
import CollaborateSVG from '../../components/svg/CollaborateSVG';

// import PrivacySVG from '../../components/svg/PrivacySVG';
// import PrivacyPNG from '../../assets/bg1.jpg'
import PrivacyPNG from '../../assets/lock.png';

const Text = ({ children }) => <p className={`${s.majorText}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>

class MajorFeatures extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    })
  }

  render() {
    return(
      <Wrap>
        <div className={f.row}>
          <div className={`${f.column} ${f['small12']} ${f['medium4']} ${s.svgWrapper}`} key="1" data-aos="fade-up" data-aos-delay="150">
            <div className={`${s.svgDiv}`} data-aos="fade-up" data-aos-delay="150">
              <ExploreSVG />
            </div>
            <H2>Explore</H2>
            <div className={s.divider}></div>
            <Text>Check out our library of legal templates generated by our fast growing community of passionate lawyer.</Text>
          </div>

          <div className={`${f.column} ${f['small12']} ${f['medium4']} ${s.svgWrapper}`} key="2" data-aos="fade-up" data-aos-delay="300">
            <div className={`${s.svgDiv}`}>
              <CollaborateSVG />
            </div>
            <H2>Collaborate</H2>
            <div className={s.divider}></div>
            <Text>Join members of the OpenLaw community to improve and build out entire legal processes to streamline day-to-day legal activity.</Text>
          </div>

          <div className={`${f.column} ${f['small12']} ${f['medium4']} ${s.svgWrapper}`} key="3" data-aos="fade-up" data-aos-delay="450">
            <div className={`${s.svgDiv}`}>
              <img src={withPrefix('/static/img/lock.png')} alt="" />
            </div>
            <H2>Privacy</H2>
            <div className={s.divider}></div>
            <Text>Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</Text>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default MajorFeatures;
