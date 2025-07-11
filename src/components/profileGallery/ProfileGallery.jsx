import "./profileGallery.css";
import { Posts } from "../../dummyData";

export default function ProfileGallery({ userId }) {
    // Filter posts to get only posts with images from the specific user
    const userPhotos = Posts.filter(post => 
        post.userId === parseInt(userId) && post.photo
    );

    if (userPhotos.length === 0) {
        return (
            <div className="profileGallery">
                <h4 className="galleryTitle">Photos</h4>
                <div className="noPhotosMessage">
                    <p>No photos shared yet</p>
                </div>
            </div>
        );
    }

    return (
        <div className="profileGallery">
            <h4 className="galleryTitle">Photos ({userPhotos.length})</h4>
            <div className="galleryGrid">
                {userPhotos.map((post) => (
                    <div key={`photo-${post.id}-${post.userId}`} className="galleryItem">
                        <img 
                            src={post.photo} 
                            alt={post.desc || "User photo"} 
                            className="galleryImg"
                        />
                        {post.desc && (
                            <div className="galleryOverlay">
                                <span className="galleryDesc">{post.desc}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
