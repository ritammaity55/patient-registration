import { useState } from 'react';
import db from '../db';

export default function SqlQuery() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const executeQuery = async () => {
        try {
            const res = await db.query(query);
            setResults(res.rows);
            setError('');
        } catch (err) {
            setError(err.message);
            setResults([]);
        }
    };

    return (
        <div>
            <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={executeQuery}>Execute</button>
            {error && <div className="error">{error}</div>}
            <table>
                <tbody>
                    {results.map((row, i) => (
                        <tr key={i}>
                            {Object.values(row).map((val, j) => (
                                <td key={j}>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}