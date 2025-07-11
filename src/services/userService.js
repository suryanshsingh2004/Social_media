import { Users } from '../dummyData';

// User service to handle user-related operations
export const userService = {
  // Get all users
  getAllUsers: () => {
    return Users;
  },

  // Get user by ID
  getUserById: (userId) => {
    const user = Users.find(user => user.id === parseInt(userId));
    return user || null;
  },

  // Get user by username
  getUserByUsername: (username) => {
    const user = Users.find(user => user.username.toLowerCase() === username.toLowerCase());
    return user || null;
  },

  // Check if user exists
  userExists: (userId) => {
    return Users.some(user => user.id === parseInt(userId));
  }
};

export default userService;
