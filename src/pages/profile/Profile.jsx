import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileFeed from "../../components/profileFeed/ProfileFeed";
import ProfileGallery from "../../components/profileGallery/ProfileGallery";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router-dom";
import { userService } from "../../services/userService";

export default function Profile() {
    const { userId } = useParams();
    const user = userService.getUserById(userId);

    // If user not found, show error message
    if (!user) {
        return (
            <>
                <Topbar/>
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileError">
                            <h2>User not found</h2>
                            <p>The user you're looking for doesn't exist.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar />
             <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="/assets/post/7.jpg" alt=""/>
                        <img className="profileUserImg" src={user.profilePicture} alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">Welcome to {user.username}'s profile!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <div className="profileFeedSection">
                        <ProfileFeed userId={userId} />
                        <ProfileGallery userId={userId} />
                    </div>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
    )
}