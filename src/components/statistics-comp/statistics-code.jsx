export const AllStatistics = ({ statistics }) => {
    return (
      <section>
        <div className="cont-statistic">
          <h2 className="title-stats">UPLOAD STATS</h2>
          <ul className="stats-list">
            {statistics.map((item) => (
              <li className="li-stat" key={item.label}>
                {item.label}
                <span className="procent">{item.percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };