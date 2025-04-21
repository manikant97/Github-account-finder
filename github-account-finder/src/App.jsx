import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import UserDetails from './components/UserDetails';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prevQueryRef = useRef('');

  useEffect(() => {
    const fetchUsers = async () => {
      if (!searchQuery.trim() || searchQuery.length < 3 || searchQuery === prevQueryRef.current) {
        setUsers([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}&per_page=5`);
        if (!response.ok) throw new Error('Failed to fetch users');
        
        const data = await response.json();
        setUsers(data.items);
        prevQueryRef.current = searchQuery;
      } catch (err) {
        setError('Error fetching users. Please try again later.');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchUsers, 500); // wait 500ms after user stops typing
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  const handleUserClick = async (user) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${user.login}`);
      if (!response.ok) throw new Error('Failed to fetch user details');

      const detailedUser = await response.json();
      setSelectedUser(detailedUser);
    } catch (err) {
      setError('Error fetching user details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          GitHub User Finder
        </h1>

        <SearchBar onSearch={setSearchQuery} />

        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}

        {loading && (
          <div className="text-center text-gray-600">Loading...</div>
        )}

        {!loading && users.length > 0 && (
          <div className="space-y-4">
            {users.map(user => (
              <UserCard
                key={user.id}
                user={user}
                onClick={handleUserClick}
              />
            ))}
          </div>
        )}

        {selectedUser && (
          <UserDetails
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
}
