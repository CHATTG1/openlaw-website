import React from 'react'

import baseStyles from '../scss/modules/base.module.scss';

import Layout from '../components/layout';

import IntroSection from '../components/sections/IntroSection';
import BuildingFuture from '../components/sections/BuildingFuture';
import ContractsModel from '../components/sections/ContractsModel';
import LargeQuote from '../components/sections/LargeQuote';
import MajorFeatures from '../components/sections/MajorFeatures';
import Features from '../components/sections/Features';
import OutroSection from '../components/sections/OutroSection';

import foundation from '../scss/modules/foundation.module.scss';

const IndexPage = () => (
    <div>
        <Layout>
            <IntroSection />
            <div className={`${foundation.row}`}>
                <h1 className={baseStyles.hidden}>OpenLaw</h1>
                <BuildingFuture />
                <ContractsModel />
                <LargeQuote />
                <MajorFeatures />
                <Features />
                <OutroSection />
            </div>
        </Layout>
    </div>
)

export default IndexPage;
