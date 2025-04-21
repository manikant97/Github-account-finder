import React from 'react';

const UserCard = ({ user, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(user)}
    >
      <div className="flex items-center space-x-4">
        <img 
          src={user.avatar_url} 
          alt={user.login}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.login}</h3>
          <a 
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
            onClick={(e) => e.stopPropagation()}
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
