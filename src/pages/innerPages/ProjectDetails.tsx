import { useParams } from "react-router-dom";
import ProjectDetailsContent from "../../components/project/ProjectDetailsContent";
import FeatureV2Data from '../../jsonData/feature/FeatureV2Data.json';
import LayoutV3 from "../../components/layouts/LayoutV3";

const ProjectDetailsPage = () => {

    const { id } = useParams()
    const data = FeatureV2Data.find(project => project.id === parseInt(id || '0'));

    return (
        <>
            <div className="aixor-main single-project">
                <LayoutV3>
                    {data && <ProjectDetailsContent projectData={data} />}
                </LayoutV3>
            </div>
        </>
    );
};

export default ProjectDetailsPage;