import "./topbar.css"
import { Search,Person,Chat,Notifications } from "@mui/icons-material"
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchService } from "../../services/searchService";
import SearchResults from "../searchResults/SearchResults";

export default function Topbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState({ users: [], posts: [] });
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            const results = searchService.searchAll(query);
            setSearchResults(results);
            setShowResults(true);
        } else {
            setSearchResults({ users: [], posts: [] });
            setShowResults(false);
        }
    };

    // Handle search input focus
    const handleSearchFocus = () => {
        if (searchQuery.trim()) {
            setShowResults(true);
        }
    };

    // Close search results
    const closeSearchResults = () => {
        setShowResults(false);
    };

    // Handle click outside search to close results
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" className="logo">SocialMedia</Link>
            </div>
            <div className="topbarCentre">
                <div className="searchbar" ref={searchRef}>
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search users and posts..."
                        className="searchInput"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onFocus={handleSearchFocus}
                    />
                    <SearchResults
                        results={searchResults}
                        onClose={closeSearchResults}
                        isVisible={showResults}
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" className="topbarLink">Homepage</Link>
                    <span className="topbarLink">Timeline</span>
                    <Link to="/login" className="topbarLink">Login</Link>
                    <Link to="/profile/1" className="topbarLink">Profile</Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/img1.jpg" alt="" className="topbarImg"/>
            </div>
        </div>
    )
}