import propTypes from "prop-types"
export const AllStatistics = ({ statistics }) => {
    return (
      <section>
        <div className="cont-statistic">
          <h2 className="title-stats">UPLOAD STATS</h2>
          <ul className="stats-list">
            {statistics.map(({id,label,percentage}) => (
              <li className="li-stat" key={id}>
                {label}
                <span className="procent">{percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  AllStatistics.propTypes = {
    statistics: propTypes.array
  }