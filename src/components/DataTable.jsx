export default function DataTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val, i) => <tr key={`${i}_${val}`}>
                    <td>{i}</td>
                    <td title={val}>{val}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}