import React from 'react';

const UserDetails = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{user.name || user.login}</h2>
          {user.bio && <p className="text-gray-600 mb-4 text-center">{user.bio}</p>}
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="font-semibold">{user.followers}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{user.following}</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="font-semibold">{user.public_repos}</p>
            <p className="text-gray-600">Public Repositories</p>
          </div>
          
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
