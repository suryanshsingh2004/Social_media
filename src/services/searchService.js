import { Users, Posts } from '../dummyData';

// Search service to handle search operations
export const searchService = {
  // Search users by username
  searchUsers: (query) => {
    if (!query || query.trim() === '') return [];
    
    const searchTerm = query.toLowerCase().trim();
    return Users.filter(user => 
      user.username.toLowerCase().includes(searchTerm)
    );
  },

  // Search posts by description
  searchPosts: (query) => {
    if (!query || query.trim() === '') return [];
    
    const searchTerm = query.toLowerCase().trim();
    return Posts.filter(post => 
      post.desc && post.desc.toLowerCase().includes(searchTerm)
    );
  },

  // Combined search for both users and posts
  searchAll: (query) => {
    if (!query || query.trim() === '') return { users: [], posts: [] };
    
    return {
      users: searchService.searchUsers(query),
      posts: searchService.searchPosts(query)
    };
  }
};

export default searchService;
