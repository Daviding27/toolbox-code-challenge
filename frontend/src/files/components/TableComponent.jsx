import { useSelector } from 'react-redux';

export const TableComponent = () => {
  const { tableLines } = useSelector((state) => state.files);

  return (
    <div className="container" style={{ padding: '20px 0px 0px' }}>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">File Name</th>
            <th scope="col">Text</th>
            <th scope="col">Number</th>
            <th scope="col">Hex</th>
          </tr>
        </thead>
        <tbody>
          {tableLines &&
            tableLines.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.text}</td>
                <td>{data.number}</td>
                <td>{data.hex}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
