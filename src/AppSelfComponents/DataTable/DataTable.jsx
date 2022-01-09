import React, { useState } from 'react';
import { useDataApi } from '../../services/server';

const path = 'users';


function DataTable() {

    const [query, setQuery] = useState('');
    const { data, isLoading, isError, doFetch } = useDataApi(path, []);






    return (
        <>
            <form onSubmit={e => {
                doFetch(typeof +query === 'number' ? `${path}?id=${query}` : path);
                e.preventDefault();
            }}>
                <input
                    type='text'
                    value={query}
                    placeholder='id'
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit" >search</button>
            </form>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (<div>Loading...</div>) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>usename</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>email</th>
                            <th>company</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person, i) =>
                            <tr key={`${i}`}>
                                <td>{person.id}</td>
                                <td title={person.name}>{person.name}</td>
                                <td>{person.username}</td>
                                <td>{person.phone}</td>
                                <td>{person.website}</td>
                                <td>{person.email}</td>
                                <td>{person.company.name}</td>
                                <td>{person.address.city}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}

        </>

    )
}

export default DataTable;