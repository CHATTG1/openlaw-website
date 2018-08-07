import React from 'react'

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/contractsmodel.module.scss';

import ContractsModelSVG from '../../components/svg/ContractsModelSVG';

import AOS from 'aos';

import Wrap from '../common/Wrap';

class ContractsModel extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: false,
      once: false,
      anchorPlacement: 'center'
    })
  }

  render() {
    return(
      <Wrap className={s.wrap}>
        <div className={f.row}>
            <div className={s.svgWrapper} data-aos="fade-right" data-aos-delay="200">
              <ContractsModelSVG />
          </div>

            <div className={`${s.content}`}>
              <div className={`${s.shapeContentWrapper} ${s.blue}`} key="1" data-aos="fade-up" data-aos-delay="200">
                <h2 data-aos="fade-up" data-aos-delay="300">Contracts are changing</h2>
                <div className={s.divider}></div>
                <p className={s.paragraph} data-aos="fade-up" data-aos-delay="400">Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
              </div>

              <div className={`${s.shapeContentWrapper} ${s.teal}`} key="2" data-aos="fade-up" data-aos-delay="400">
                <h2 data-aos="fade-up" data-aos-delay="600">Create smart contracts</h2>
                <div className={s.divider}></div>
                <p className={s.paragraph} data-aos="fade-up" data-aos-delay="800">Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
              </div>
            </div>
          </div>
      </Wrap>
    )
  }

};

export default ContractsModel;
