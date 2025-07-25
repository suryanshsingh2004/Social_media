import "./post.css"
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Post({post}){
    const [like,setLike] = useState(post.like)
    const [isLiked,setisLiked] = useState(false)
    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1)
        setisLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                            <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=""/>
                            <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        </Link>
                        <span className="postDate">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt=""/>
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt=""/>
                        <span className="postLikeCounter">{like} people liked it</span>

                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}