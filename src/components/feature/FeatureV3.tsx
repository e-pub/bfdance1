import FeatureV3Data from '../../jsonData/feature/FeatureV3Data.json';
import SingleFeatureV3 from './SingleFeatureV3';

const FeatureV3 = () => {
    return (
        <>
            <div className="feature-sec feature-sec-2" id="projects">
                <div className="custom-container">
                    <div className="feature-projects-lists-two">
                        {FeatureV3Data.map(feature =>
                            <SingleFeatureV3 feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV3;