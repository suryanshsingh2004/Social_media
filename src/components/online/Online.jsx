import "./online.css"
import { Link } from "react-router-dom";

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <Link to={`/profile/${user.id}`}>
                    <img className="rightbarProfileImg" src={user.profilePicture} alt=""/>
                </Link>
                <span className="rightbarOnline"></span>
            </div>
            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="rightbarUsername">{user.username}</span>
            </Link>
        </li>
    );
}