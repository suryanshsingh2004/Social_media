import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../../components/online/Online";
import { Link } from "react-router-dom";

export default function Rightbar(profile){
    const HomeRightbar = () => {
        return(
            <>
            <div className="birthdayContainer">
                <img className="birthdayImg" src="/assets/gift.png" alt="" />
                <span className="birthdayText">
                    <b>Virat Kohli</b> and <b> 3 other friends</b> have birthday today.
                </span>
            </div>
            <img className="rightbarAd" src="/assets/ad.png" alt=""/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map((u) => (
                    <Online key={u.id} user={u} />
                ))}
            </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoKey">Delhi</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoKey">India</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoKey">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                {Users.slice(1, 7).map((user) => (
                    <div key={user.id} className="rightbarFollowing">
                        <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={user.profilePicture} alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">{user.username}</span>
                        </Link>
                    </div>
                ))}
            </div>
            </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <HomeRightbar/>
            </div>
        </div>
    );
}