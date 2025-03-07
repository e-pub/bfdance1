import FooterV1 from "../footer/FooterV1";
import HeaderV2 from "../header/HeaderV2";

interface DataType {
    children?: React.ReactNode;
}

const LayoutV3 = ({ children }: DataType) => {
    return (
        <>
            <HeaderV2 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV3;