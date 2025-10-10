import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const{imageUrl, title, route} = category;
    const nav = useNavigate();
    const onNavigateRoute = () => nav(route);
    return(
        <div className="directory-item-container" onClick={onNavigateRoute}>
              <div className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`
              }} />
              <div className="body">
                  <h2>{title}</h2>
                  <p>Shop now</p>
              </div>
            </div>
    );
}

export default DirectoryItem;