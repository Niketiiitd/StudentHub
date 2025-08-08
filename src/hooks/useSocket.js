import { useEffect, useRef, useState } from 'react';
import socketService from '../utils/socket';

export const useSocket = () => {
  const socketRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only connect if we don't have an active connection
    if (!socketRef.current?.connected) {
      try {
        socketRef.current = socketService.connect();
        
        socketRef.current.on('connect', () => {
          setIsConnected(true);
          setError(null);
        });

        socketRef.current.on('disconnect', () => {
          setIsConnected(false);
        });

        socketRef.current.on('connect_error', (err) => {
          setError(err.message);
          setIsConnected(false);
        });
      } catch (err) {
        setError(err.message);
        console.error('Socket connection failed:', err);
      }
    }

    return () => {
      // Don't disconnect on component unmount, keep connection alive
      // socketService.disconnect();
    };
  }, []);

  return { 
    socket: socketRef.current, 
    isConnected, 
    error 
  };
};
