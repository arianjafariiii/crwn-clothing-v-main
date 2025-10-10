import CategoriesContainer from "../../components/categories-container/categories-container.component";
import {Outlet} from "react-router-dom"


const Home = () => {
    
    return(
        <div>
            <CategoriesContainer />
            <Outlet/>
        </div>
    );
}



export default Home;