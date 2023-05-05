import propTypes from "prop-types"
import style from './Profile.module.css'
export const UserProfile = ({username,tag,location,avatar,stats}) => {
   const {followers,views,likes} = stats;
    return (
        <div className={style.profile}>
<div className={style.cardcont}>
<img src={avatar} alt="avatar" className={style.imgavatar}/>
<h2 className={style.name}>{username}</h2>
<p className={style.tag}>@{tag}</p>
<p className={style.location}>{location}</p>
</div>
<ul className={style.statscont}>
    <li className={style.stat}>Followers <span className={style.statspan}>{followers}</span></li>
    <li className={style.stat}>Views <span className={style.statspan}>{views}</span></li>
    <li className={style.stat}>Likes <span className={style.statspan}>{likes}</span></li>
</ul>
</div>
    );
};

UserProfile.propTypes = {
    username:propTypes.string.isRequired,
    tag:propTypes.string.isRequired,
    location:propTypes.string.isRequired,
    avatar:propTypes.string.isRequired,
    stats:propTypes.object.isRequired
}
