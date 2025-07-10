import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/auth-utils";

export function useAuth() {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["/api/auth/user"],
    queryFn: async (): Promise<User | null> => {
      try {
        const response = await fetch('/api/auth/user', {
          credentials: 'include',
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            return null;
          }
          throw new Error('Failed to fetch user');
        }
        
        return await response.json();
      } catch (error) {
        console.error('Auth error:', error);
        return null;
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
  };
}