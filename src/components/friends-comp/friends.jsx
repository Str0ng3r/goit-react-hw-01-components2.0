import propTypes from 'prop-types';
import style from './Friends.module.css';
import { MakeFriends } from './friendli';
export const ListFriends = ({ dataFriend }) => {
  return (
    <section>
      <ul className={style.userslist}>
        {dataFriend.map(({ avatar, name, isOnline, id }) => (
          <MakeFriends
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          ></MakeFriends>
        ))}
      </ul>
    </section>
  );
};
ListFriends.propTypes = {
  dataFriend: propTypes.arrayOf(propTypes.object).isRequired,
};
