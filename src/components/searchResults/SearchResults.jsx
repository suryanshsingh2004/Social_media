import "./searchResults.css";
import { Link } from "react-router-dom";

export default function SearchResults({ results, onClose, isVisible }) {
    if (!isVisible || (!results.users.length && !results.posts.length)) {
        return null;
    }

    return (
        <div className="searchResults">
            <div className="searchResultsContainer">
                <div className="searchResultsHeader">
                    <h4>Search Results</h4>
                    <button className="closeButton" onClick={onClose}>×</button>
                </div>
                
                {results.users.length > 0 && (
                    <div className="searchSection">
                        <h5>Users</h5>
                        {results.users.map(user => (
                            <Link 
                                key={user.id} 
                                to={`/profile/${user.id}`} 
                                className="searchResultItem"
                                onClick={onClose}
                            >
                                <img 
                                    src={user.profilePicture} 
                                    alt="" 
                                    className="searchResultImg"
                                />
                                <span className="searchResultName">{user.username}</span>
                            </Link>
                        ))}
                    </div>
                )}

                {results.posts.length > 0 && (
                    <div className="searchSection">
                        <h5>Posts</h5>
                        {results.posts.map(post => (
                            <div key={post.id} className="searchResultItem">
                                <span className="searchResultText">{post.desc}</span>
                            </div>
                        ))}
                    </div>
                )}

                {results.users.length === 0 && results.posts.length === 0 && (
                    <div className="noResults">
                        <span>No results found</span>
                    </div>
                )}
            </div>
        </div>
    );
}
