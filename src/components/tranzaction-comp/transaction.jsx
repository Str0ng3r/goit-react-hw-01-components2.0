import PropTypes from "prop-types"
export const TransactionTable = ({transdata}) => {
    return(
        <table className="trans-table">
            <thead>
    <tr>
      <th className="th-trans">Type</th>
      <th className="th-trans">Amount</th>
      <th className="th-trans">Currency</th>
    </tr>
  </thead>
  <tbody>
{transdata.map(({id,type,amount,currency})=> (
<tr className="tr-table" key={id}>
    <td className="td-trans">{type}</td>
    <td className="td-trans">{amount}</td>
    <td className="td-trans">{currency}</td>
</tr>
))}
  </tbody>
        </table>
    )
}
TransactionTable.propTypes = {
  transdata: PropTypes.array
}