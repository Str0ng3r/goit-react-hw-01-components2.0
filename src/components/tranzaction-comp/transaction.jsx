import PropTypes from "prop-types"
import style from './Transaction.module.css'
export const TransactionTable = ({transdata}) => {
    return(
        <table>
            <thead>
    <tr>
      <th className={style.thtrans}>Type</th>
      <th className={style.thtrans}>Amount</th>
      <th className={style.thtrans}>Currency</th>
    </tr>
  </thead>
  <tbody>
{transdata.map(({id,type,amount,currency})=> (
<tr key={id}>
    <td className={style.tdtrans}>{type}</td>
    <td className={style.tdtrans}>{amount}</td>
    <td className={style.tdtrans}>{currency}</td>
</tr>
))}
  </tbody>
        </table>
    )
}
TransactionTable.propTypes = {
  transdata: PropTypes.arrayOf(PropTypes.object).isRequired
}