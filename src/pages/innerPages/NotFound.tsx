import HeaderV2 from '../../components/header/HeaderV2';
import ErrorHero from '../../components/hero/ErrorHero';
import FooterV2 from '../../components/footer/FooterV2';

const NotFoundPage = () => {
    return (
        <>
            <div className="aixor-main error-page-area">
                <HeaderV2 />
                <ErrorHero />
                <FooterV2 />
            </div>
        </>
    );
};

export default NotFoundPage;