import style from './Stats.module.css'
import propTypes from "prop-types"
export const AllStatistics = ({ statistics, titleidx }) => {
  const title = titleidx ? <h2 className={style.titlestats}>{titleidx}</h2> : null;

  return (
    <section>
      <div className={style.contstatistic}>
        {title}
        <ul className={style.statslist}>
          {statistics.map(({ id, label, percentage }) => (
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
    titleidx: propTypes.string,
    statistics: propTypes.arrayOf(propTypes.object).isRequired
  }