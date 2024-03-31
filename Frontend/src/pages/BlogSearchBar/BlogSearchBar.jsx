
import * as Icons from "react-icons/fa";
import {recipesSearchData} from "../../Data/DropDownData"
import { useState } from 'react';
import "./BlogSearchBar.css"
import TrendingArticles from "../TrendingArticles/TrendingArticles"

const BlogSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
    <div className="recipesContainer">
        <div className="recipesSearchHeading" >
            <h2>Find & Log Healthy Recipes</h2>
        </div>
        <div className="recipesSearchBarMainDiv">
            <div className="recipesSearchBarDiv">
            <div><Icons.FaSearch className="recipesSearchIcon" /> </div>
            <div><input type="text" className="recipesSearchInput" onChange={(e)=>{setSearchTerm(e.target.value)}} /></div>
            </div>
        </div>
            
        
    </div>
    <div style={{padding:"0% 5%", marginBottom:"4%"}} >
    <TrendingArticles/>
    </div>
    <div>
        {recipesSearchData.filter((val)=>{
            if(searchTerm===""){
                return val
            } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
                <div className="RecipesMapCantainer" key={key}>
                    <div className="RecipeRatingImage">
                        <div className="RecipeRatingImageForBorder">
                        <img src={val.imgUrl} alt="" />
                        </div>
                    </div>
                    <div >
                    <h2 className="RecipeHeading">{val.title}</h2>
                    <p className="RecipeBy">{val.by}</p>
                    <p className="RecipeRatingStars"> <Icons.FaStar/><Icons.FaStar/><Icons.FaStar/><Icons.FaStar/><Icons.FaRegStar/></p>
                    <p className="RecipeDescription" >{val.description}</p>
                    <div className="RecipeSocialMediaBox">
                        <div className="RecipeLogit">LOG IT</div>
                        <div className="RecipeLogit">READ MORE</div>
                        <div  className="RecipeSocialMediaIcons">
                        <Icons.FaFacebookSquare className="socialMediaIconFB" />
                        <Icons.FaTwitterSquare className="socialMediaIconTwitter"/>
                        <Icons.FaInstagram className="socialMediaIconInsta"/>
                        <Icons.FaPinterest className="socialMediaIconPin"/>
                        </div>
                    </div>
                    </div>
                    
                </div>
            )
        }) }
        </div>
    </div>
  )
}

export default BlogSearchBar