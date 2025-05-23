import { useEffect } from 'react';

export default function SyncProvider({ children }) {
    useEffect(() => {
        const channel = new BroadcastChannel('db-updates');
        const handler = () => window.location.reload();
        channel.addEventListener('message', handler);
        return () => channel.removeEventListener('message', handler);
    }, []);

    return children;
}