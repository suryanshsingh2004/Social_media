import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { MessageSquare, Heart, Bookmark } from 'lucide-react';

// Helper to get a specific cookie value
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve access token from cookies
        const token = getCookie('accessToken');
        if (!token) throw new Error('No access token found');

        // Decode token to get the user ID (if needed)
        const decoded = jwtDecode(token);
        const userId = decoded._id;

        // Fetch data from backend
        const response = await fetch(`http://localhost:5000/api/v1/users/detailuser/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        console.log('The user data is:', data);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading user data.</div>;
  }

  const { user, posts } = userData;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Loop through the users */}
      {user.map((userInfo) => (
        <div key={userInfo._id}>
          <header className="flex flex-col items-center mb-8 sm:flex-row sm:items-start">
          <img
  src={userInfo.Profilephoto || '/placeholder.svg'}
  alt={userInfo.username}
  width={128}
  height={128}
  className="rounded-full mb-4 sm:mb-0 sm:mr-8"
/>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold mb-2">{userInfo.username}</h1>
              <p className="text-gray-600 mb-4">Email: {userInfo.Email}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Follow
              </button>
            </div>
          </header>
        </div>
      ))}

      {/* Loop through the posts */}
      <main>
        <h2 className="text-lg font-semibold mb-4">User Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post._id} className="relative group">
              <img
                src={post.Postimage || '/placeholder.svg'}
                alt={`Post ${post._id}`}
                width={300}
                height={300}
                className="w-full h-auto"
              />
               
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4 text-white">
                <span className="flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    {`Caption: ${post.caption || 'No caption available'}`}
                  </span>
                  
                  <span className="flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    {post.likes || 0}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    {post.comments || 0}
                  </span>
                  <span className="flex items-center">
                    <Bookmark className="w-6 h-6 mr-2" />
                    {post.saved || 0}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
