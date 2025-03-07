import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BlogDetailsContent from '../../components/blog/BlogDetailsContent';
import FeatureV3Data from '../../jsonData/feature/FeatureV3Data.json';
import { useParams } from 'react-router-dom';
import LayoutV3 from '../../components/layouts/LayoutV3';

const BlogDetailsPage = () => {

    const { id } = useParams()
    const data = FeatureV3Data.find(feature => feature.id === parseInt(id || '0'));

    return (
        <div className="aixor-main contact-page">
            <LayoutV3>
                <Breadcrumb />
                {data && <BlogDetailsContent blogData={data} />}
            </LayoutV3>
        </div>
    );
};

export default BlogDetailsPage;