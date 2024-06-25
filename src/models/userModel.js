import { useState } from 'react';

export function useUserModel() {
  const [user, setUser] = useState(null);

  return {
    user,
    setUser,
  };
}