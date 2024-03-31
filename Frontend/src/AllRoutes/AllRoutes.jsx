
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignupWelcome from "../pages/Signup/SignupWelcome";
import SignupWeightGoal from "../pages/Signup/SignupWeightGoal";
import SignupActivity from "../pages/Signup/SignupActivity";
import SignupTall from "../pages/Signup/SignupTall";
import SignupWeekly from "../pages/Signup/SignupWeekly";
import SignupCreateAcc from "../pages/Signup/SignupCreateAcc";
import SignupUsername from "../pages/Signup/SignupUsername";
import SignupCongrats from "../pages/Signup/SignupCongrats";
import Login from "../pages/Login/Login";
import Premium from "../pages/Premium/Premium";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import AppPage from "../pages/AppPage/AppPage";
import MyHome from "../pages/Home/MyHome";
import BlogHomePage from "../pages/BlogHomePage/BlogHomePage";
import Food from "../pages/Food/Food";
import BreakfastSearch from "../pages/BreakfastSearch/BreakfastSearch";
import LunchSearch from "../pages/LunchSearch/LunchSearch";
import DinnerSearch from "../pages/DinnerSearch/DinnerSearch";
import SnackSearch from "../pages/SnackSearch/SnackSearch";
import Exercise from "../pages/Exercise/Exercise";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupWelcome />} />
        <Route path="/signupWeightGoal" element={<SignupWeightGoal />} />
        <Route path="/signupActivity" element={<SignupActivity />} />
        <Route path="/signupTall" element={<SignupTall />} />
        <Route path="/signupWeekly" element={<SignupWeekly />} />
        <Route path="/signupCreateAccount" element={<SignupCreateAcc />} />
        <Route path="/signupUsername" element={<SignupUsername />} />
        <Route path="/signupCongrats" element={<SignupCongrats />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/blog" element={<BlogHomePage />} />
        <Route path="/breakfastSearch" element={<BreakfastSearch />} />
        <Route path="/lunchSearch" element={<LunchSearch />} />
        <Route path="/dinnerSearch" element={<DinnerSearch />} />
        <Route path="/snackSearch" element={<SnackSearch />} />
        <Route path="/myHome" element={<MyHome />} />
        <Route path="/apps" element={<AppPage />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
