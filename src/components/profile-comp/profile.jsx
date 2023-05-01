
export const UserProfile = ({username,tag,location,avatar,stats}) => {
    return (
        <div className="wrap-cont">
<div className="card-cont">
<img src={avatar} alt="avatar" className="img-avatar"/>
<h2 className="name">{username}</h2>
<p className="tag">@{tag}</p>
<p className="location">{location}</p>
</div>
<div className="stats-cont">
    <p className="stat">Followers <span className="stat-span">{stats.followers}</span></p>
    <p className="stat">Views <span className="stat-span">{stats.views}</span></p>
    <p className="stat">Likes <span className="stat-span">{stats.likes}</span></p>
</div>
</div>
    );
};
