import Post from "../post/Post";
import "./profileFeed.css";
import { Posts } from "../../dummyData";

export default function ProfileFeed({ userId }) {
    // Filter posts to show only posts from the specific user
    const userPosts = Posts.filter(post => post.userId === parseInt(userId));

    return (
        <div className="profileFeed">
            <div className="profileFeedWrapper">
                {userPosts.length > 0 ? (
                    userPosts.map((post) => (
                        <Post key={`${post.id}-${post.userId}`} post={post} />
                    ))
                ) : (
                    <div className="noPostsMessage">
                        <h3>No posts yet</h3>
                        <p>This user hasn't shared any posts.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
