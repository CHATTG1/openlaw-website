import React from 'react'
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/majorfeatures.module.scss';

import Wrap from '../common/Wrap';
import AOS from 'aos';

import BuildSVG from '../../components/svg/BuildSVG';
// import BuildPNG from '../../assets/build.png';
// import CommunitySVG from '../../components/svg/CommunitySVG';
import CommunityPNG from '../../assets/community.png';

const Text = ({ children }) => <p className={`${s.p}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>

class Features extends React.Component {
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
        <div className={s.fullWrap}>
          <div className={`${f.row} ${s.featureTile}`} key="1">
            <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.imageWrapper}`} data-aos="fade-right" data-aos-delay="200">
              <BuildSVG />
            </div>

            <div className={`${f.column} ${f['small12']} ${f['medium7']} ${s.contentWrapper}`} data-aos="fade-up" data-aos-delay="400">
              <H2>Build</H2>
              <div className={s.leftDivider}></div>
              <Text>Build entire legal applications on OpenLaw using our public API.</Text>
                <button className={s.button}>Learn How</button>
            </div>
          </div>

          <div className={`${f.row} ${s.featureTile}`} key="2">
            <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.imageWrapper}`} data-aos="fade-right" data-aos-delay="400">
              <img src={withPrefix('/static/img/community.png')} alt="" />
            </div>

            <div className={`${f.column} ${f['small12']} ${f['medium7']} ${s.contentWrapper}`} data-aos="fade-up" data-aos-delay="600">
              <H2>Community</H2>
              <div className={s.leftDivider}></div>
              <Text>We're the home to a passionate group of lawyers committed to rebuilding the legal industry.</Text>
              <button className={s.button}>Join Us</button>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default Features;
