import { useState } from "react";
import "./LatestArticles.css";

const LatestArticles = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="MainLatestArticlesDiv">
      <div className="LATESTDiv">
        <div>
          <h4>LATEST ARTICLES</h4>
        </div>
        <div className="line2"></div>
      </div>
      <div></div>
      <div>
        <div>
          <img
            className="blogTrendingPoster"
            src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Featured200smooth-1-1140x545.jpg"
            alt=""
          />
        </div>
        <div className="trendingBlogImages">
          <div></div>
          <div>
            <img
              className="trendingBlogGridImages"
              src="https://blog.myfitnesspal.com/wp-content/uploads/2017/10/How-to-Make-Your-Own-Almond-Butter-1-750x592.jpg.webp"
              alt=""
            />
            <h4 className="trendingBlogGridHeading">
              How to Make Your Own Almond Butter
            </h4>
            <p className="trendingBlogGridPara">JULY 15, 2022</p>
          </div>
          <div>
            <img
              className="trendingBlogGridImages"
              src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/3-Perks-of-Hot-Weather-Workouts-750x592.jpg"
              alt=""
            />
            <h4 className="trendingBlogGridHeading">
              3 Perks of Hot-Weather Workouts
            </h4>
            <p className="trendingBlogGridPara">JULY 13, 2022</p>
          </div>
          <div>
            <img
              className="trendingBlogGridImages"
              src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/5-Smart-and-Simple-Ways-to-Stay-Hydrated-750x592.jpg.webp"
              alt=""
            />
            <h4 className="trendingBlogGridHeading">
              5 Smart and Simple Ways to Stay Hydrated
            </h4>
            <p className="trendingBlogGridPara">JULY 11,2022</p>
          </div>
          <div>
            <img
              className="trendingBlogGridImages"
              src="https://blog.myfitnesspal.com/wp-content/uploads/2021/07/How-to-Stay-Healthy-and-on-Track-With-Your-Health-Goals-on-Vacation-750x592.jpg"
              alt=""
            />
            <h4 className="trendingBlogGridHeading">
              How to Stay on Track With Your Health Goals on Vacation
            </h4>
            <p className="trendingBlogGridPara">JULY 8,2022</p>
          </div>
          <div>
            <img
              className="trendingBlogGridImages"
              src="https://blog.myfitnesspal.com/wp-content/uploads/2021/08/10-Foods-That-Dietitians-Eat-on-Road-Trips-750x592.jpg"
              alt=""
            />
            <h4 className="trendingBlogGridHeading">
              10 Foods That Dietitians Eat on Road Trips
            </h4>
            <p className="trendingBlogGridPara">JULY 6,2022</p>
          </div>
        </div>

        {show ? (
          <div className="trendingBlogImages">
            <div>
              <img
                className="trendingBlogGridImages"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Mixed-Berry-Tart-2-750x592.jpg.webp"
                alt=""
              />
              <h4 className="trendingBlogGridHeading">Mixed Berry Tart</h4>
              <p className="trendingBlogGridPara">JULY 4, 2022</p>
            </div>
            <div>
              <img
                className="trendingBlogGridImages"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2019/07/15-Festive-Fourth-of-July-Recipes-Under-425-Calories-750x592.jpeg.webp"
                alt=""
              />
              <h4 className="trendingBlogGridHeading">
                15 Festive Fourth of July Recipes Under 425 Calories
              </h4>
              <p className="trendingBlogGridPara">JULY 1, 2022</p>
            </div>
            <div>
              <img
                className="trendingBlogGridImages"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/5-Ways-to-Progress-From-Walking-to-Running-750x592.jpg"
                alt=""
              />
              <h4 className="trendingBlogGridHeading">
                5 Ways to Progress From Walking to Running
              </h4>
              <p className="trendingBlogGridPara">JUNE 29, 2022</p>
            </div>
            <div>
              <img
                className="trendingBlogGridImages"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/09/How-Much-Water-Should-You-Actually-Drink-750x592.jpg"
                alt=""
              />
              <h4 className="trendingBlogGridHeading">
                How Much Water Should You Actually Drink?
              </h4>
              <p className="trendingBlogGridPara">JUNE 27, 2022</p>
            </div>
            <div>
              <img
                className="trendingBlogGridImages"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/9-Healthy-Burger-Recipes-Under-450-Calories-750x592.jpeg"
                alt=""
              />
              <h4 className="trendingBlogGridHeading">
                9 Healthy Burger Recipes Under 450 Calories
              </h4>
              <p className="trendingBlogGridPara">JUNE 24, 2022</p>
            </div>
            <div>
              <img
                className="trendingBlogGridImages"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2020/02/How-an-Athletes-Weight-Impacts-Macro-Needs-3-750x592.jpg"
                alt=""
              />
              <h4 className="trendingBlogGridHeading">
                How an Athlete’s Weight Impacts Macro Needs
              </h4>
              <p className="trendingBlogGridPara">JUNE 22, 2022</p>
            </div>
          </div>
        ) : null}
      </div>
      <div onClick={() => setShow(true)} className="blogHomeLoadMore">
        <p>LOAD MORE</p>
      </div>
    </div>
  );
};

export default LatestArticles;
