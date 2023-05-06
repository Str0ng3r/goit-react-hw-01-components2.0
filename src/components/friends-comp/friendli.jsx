import style from './Friends.module.css';
export const MakeFriends = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={style.liuser}>
      <div className={isOnline ? style.redcirc : style.greencirc}></div>
      <img className={style.avataruser} src={avatar} alt="avatar-user" />
      <p className={style.nameuser}>{name}</p>{' '}
    </li>
  );
};
