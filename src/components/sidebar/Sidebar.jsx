import "./sidebar.css"
// import { RssFeed } from "@material-ui/icons";
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        {/* <RssFeed className="sidebarIcon"/> */}
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img2.jpg" alt=""/>
                        <span className="sidebarFriendName">Christiano Ronaldo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img3.jpg" alt=""/>
                        <span className="sidebarFriendName">Rohit Sharma</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img4.jpg" alt=""/>
                        <span className="sidebarFriendName">Mahendra Singh Dhoni</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img5.jpg" alt=""/>
                        <span className="sidebarFriendName">Shahrukh Khan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img6.jpg" alt=""/>
                        <span className="sidebarFriendName">Salmaan Khan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img7.jpg" alt=""/>
                        <span className="sidebarFriendName">Tom Cruise</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img8.jpg" alt=""/>
                        <span className="sidebarFriendName">Lionel Messi</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img2.jpg" alt=""/>
                        <span className="sidebarFriendName">Christiano Ronaldo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img2.jpg" alt=""/>
                        <span className="sidebarFriendName">Christiano Ronaldo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/img2.jpg" alt=""/>
                        <span className="sidebarFriendName">Christiano Ronaldo</span>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}