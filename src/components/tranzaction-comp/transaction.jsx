
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
{transdata.map((item)=> (
<tr className="tr-table" key={item.id}>
    <td className="td-trans">{item.type}</td>
    <td className="td-trans">{item.amount}</td>
    <td className="td-trans">{item.currency}</td>
</tr>
))}
  </tbody>
        </table>
    )
}