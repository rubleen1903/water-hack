import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Water efficiency',
    paragraph: 'Water efficiency is reducing water wastage by measuring the amount of water required for a particular purpose and the amount of water used or delivered. Water efficiency differs from water conservation in that it focuses on reducing waste, not restricting use.Solutions for water efficiency focus not only on reducing the amount of potable water used, but also on reducing the use of non-potable water where appropriate (i.e. flushing toilet, watering landscape, etc.). It also emphasises the influence consumers can have in water efficiency by making small behavioural changes to reduce water wastage and by choosing more water efficient products.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 Why to save Water ?
                  </div>
                <h3 className="mt-0 mb-12">
                Save Water Save Life
                  </h3>
                <p className="m-0">
                Water has become a highly necessary part of human being’s existence on Earth. Thus, the importance of water can be compared to the importance of air. All living organisms whether it is human, animals, or plants. Everyone is completely depending on fresh and potable water. Thus, essay on save water save a life is an insight into some of the unknown and important benefits of water for human beings. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/save1.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Need to Save Water
                  </div>
                <h3 className="mt-0 mb-12">
                Save Water Save Life
                  </h3>
                <p className="m-0">
                Currently, there are many regions in the world that are facing extreme water scarcity due to deÃ§line of groundwater and scanty rainfalls. Also, in some areas, the groundwater is contaminated or it has been overused. Thus, these factors have to lead to drought situations and in these areas it has lead to water scarcity. Furthermore, urbanization and industrialization have added to the problems where groundwater has been overused to fulfill the increasing demands of the population. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/save2.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 Save Water Initiative
                  </div>
                <h3 className="mt-0 mb-12">
                Save Water Save Life
                  </h3>
                <p className="m-0">
                This initiative can help and promote the conservation of water. Also, it can be spread awareness among the people about the importance of water. Additionally, the save water campaign helps people realize that the sources of fresh and pure water are very limited. So, if it is overused that there are chances that they might not be able to fulfill the increasing demands of the population. Through this campaign, we can create awareness among the people about the benefits and preserving water and using it diligently.


                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/save3.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;