import Union from "/assets/images/Union.svg"
import comment1 from "/assets/images/comment-1.png"
import comment2 from "/assets/images/comment-2.png"
import replayIcon from "/assets/images/reply-icon.svg"
import CommentForm from "../form/CommentForm";
import FeatureV3Data from '../../jsonData/feature/FeatureV3Data.json';
import SearchForm from "../form/SearchForm";
import handleSmoothScroll from "../utilities/handleSmoothScroll";
import { Link } from "react-router-dom";

interface DataType {
    title?: string;
    thumbFull?: string
    date?: string
}

const BlogDetailsContent = ({ blogData }: { blogData: DataType }) => {
    const { title, thumbFull, date } = blogData

    return (
        <>
            <div className="blog-detail-sec">
                <div className="container">
                    <div className="custom-row">
                        <div className="left">
                            <div className="blog-detail-content-wrap">
                                <div className="blog-content-box">
                                    <div className="feature-project feature-project-2">
                                        <div className="img-box">
                                        </div>
                                        <div className="feature-project-infos">
                                            <div className="feature-project-info-box">
                                                <span className="title">Title:</span>
                                                <span className="subtitle">{title}</span>
                                            </div>
                                            <div className="feature-project-info-box">
                                                <span className="title">Date:</span>
                                                <span className="subtitle">{date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Visual campaigns are key to capturing attention and delivering impactful messages. By blending eye-catching imagery with thoughtful messaging, these campaigns engage audiences and leave a lasting impression. Whether for online platforms or print, the aim is to drive action and deepen brand connections. Done right, visual campaigns can elevate your brand and enhance its visibility.</p>
                                    <p>Whether in digital or print formats, the objective is to inspire action and strengthen brand loyalty. When executed effectively, visual campaigns can significantly boost your brand’s recognition and impact.</p>
                                </div>
                                <img src={`/assets/images/${thumbFull}`} alt="image" />
                                <div className="blog-content-box">
                                    <h3>Importance of Visual Campaigns</h3>
                                    <p>Visual campaigns are vital for effective communication. They quickly capture attention and enhance engagement through compelling imagery. By conveying messages efficiently visuals create memorable impressions that strengthen brand identity. Consistent visual themes foster recognition, while effective designs drive action and encourage audience engagement.</p>
                                    <ul>
                                        <li>I. Captures Attention</li>
                                        <li>II. Enhances Engagement</li>
                                        <li>III. Conveys Messages Quickly</li>
                                        <li>IV. Strengthens Brand Identity</li>
                                        <li>V. Increases Shareability</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="comment-lists-wrap">
                                <h3 className="title-with-circle section-subtitle">
                                    <img src={Union} alt="icon" />
                                    COMMENTS
                                </h3>
                                <div className="comment-lists">
                                    <div className="comment-box">
                                        <img src={comment1} alt="Comment" />
                                        <div className="comment-body">
                                            <span className="name">AIDEN</span>
                                            <span className="date">2 January 2023</span>
                                            <p>As the internet continues to develop and grow exponentially, jobs related to industry do too, particularly those that relate to web design and development. </p>
                                            <Link to="#" className="reply-btn theme-btn">REPLY <img src={replayIcon} alt="Icon" /></Link>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <img src={comment2} alt="Comment" />
                                        <div className="comment-body">
                                            <span className="name">RANDREN</span>
                                            <span className="date">8 September 2024</span>
                                            <p>Given the rapid expansion and evolution of the internet, job opportunities in the industry are also increasing, especially in areas like web design and development.</p>
                                            <Link to="#" className="reply-btn theme-btn">REPLY <img src={replayIcon} alt="Icon" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CommentForm />
                        </div>
                        <aside className="blog-sidebar">
                            <SearchForm />
                            <div className="sidebar-widget sidebar-widget-recent-post">
                                <h4>I. Recent Post</h4>
                                <ul>
                                    {FeatureV3Data.slice(0, 3).map(data =>
                                        <li key={data.id}><Link to={`/blog-details/${data.id}`}>{data.title2} </Link></li>
                                    )}
                                </ul>
                            </div>
                            <div className="sidebar-widget sidebar-widget-categories">
                                <h4>II. Categories</h4>
                                <ul>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Analysis <span className="number">1</span></Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Wireframe <span className="number">1</span></Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Design <span className="number">1</span></Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Website <span className="number">1</span></Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Security <span className="number">2</span></Link></li>
                                </ul>
                            </div>
                            <div className="sidebar-widget sidebar-widget-recent-comments">
                                <h4>III. Recent Comments</h4>
                                <ul>
                                    {FeatureV3Data.slice(0, 4).map(data =>
                                        <li key={data.id}><Link to={`/blog-details/${data.id}`}> <strong>{data.author}</strong> {data.comment} </Link></li>
                                    )}
                                </ul>
                            </div>
                            <div className="sidebar-widget sidebar-widget-tags">
                                <h4>IV. Tags</h4>
                                <ul>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Analysis</Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Design</Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Marketing</Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Visuals</Link></li>
                                    <li><Link to="#" onClick={handleSmoothScroll}>Process</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailsContent;