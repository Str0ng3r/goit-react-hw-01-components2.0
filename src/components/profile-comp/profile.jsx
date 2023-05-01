
export const UserProfile = ({username,tag,location,avatar,stats}) => {
    return (
        <div className="wrap-cont">
<div className="card-cont">
<img src={avatar} alt="avatar" className="img-avatar"/>
<h2 className="name">{username}</h2>
<p className="tag">@{tag}</p>
<p className="location">{location}</p>
</div>
<ul className="stats-cont">
    <li className="stat">Followers <span className="stat-span">{stats.followers}</span></li>
    <li className="stat">Views <span className="stat-span">{stats.views}</span></li>
    <li className="stat">Likes <span className="stat-span">{stats.likes}</span></li>
</ul>
</div>
    );
};
