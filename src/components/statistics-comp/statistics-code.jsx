import style from './Stats.module.css'
import propTypes from "prop-types"
export const AllStatistics = ({ statistics }) => {
    return (
      <section>
        <div className={style.contstatistic}>
          <h2 className={style.titlestats}>UPLOAD STATS</h2>
          <ul className={style.statslist}>
            {statistics.map(({id,label,percentage}) => (
              <li className={style.listat} key={id}>
                {label}
                <span className={style.procent}>{percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  AllStatistics.propTypes = {
    statistics: propTypes.arrayOf(propTypes.object).isRequired
  }