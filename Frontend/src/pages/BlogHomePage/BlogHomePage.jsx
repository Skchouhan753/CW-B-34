
import TrendingArticles from "../TrendingArticles/TrendingArticles";
import './BlogHomePage.css';
import LatestArticles from "../LatestArticles/LatestArticles";
import BlogNav from "../BlogNav/BlogNav"

const BlogHomePage = () => {
  return (
    <>
    <BlogNav/>
    <div className="blogMainContainer">
      <TrendingArticles />
      <LatestArticles />
    </div>

    </>
  );


};

export default BlogHomePage;
