import { useState } from 'react';
import db from '../db'; // Assuming '../db' correctly points to your database utility

export default function PatientForm() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await db.query(
            'INSERT INTO patients (name, dob, email) VALUES ($1, $2, $3)',
            [name, dob, email]
        );

        const channel = new BroadcastChannel('db-updates');
        channel.postMessage({ type: 'update' });

        // Reset form
        setName('');
        setDob('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button type="submit">Register Patient</button>
        </form>
    );
}