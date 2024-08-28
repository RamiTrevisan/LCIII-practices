import PropTypes from 'prop-types';

const Table = ({ data }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingresos netos</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}> 
                        <td>{item.brand}</td>
                        <td>$ {item.income.toLocaleString('es-ES')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Definición de PropTypes
Table.propTypes = {
    data: PropTypes.arrayOf(({
        brand: PropTypes.string,
        income: PropTypes.number
    }))
};

export default Table;
