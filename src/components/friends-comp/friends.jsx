import propTypes from "prop-types"
import style from './Friends.module.css'
export const ListFriends = ({dataFriend}) => {
    return (
        <section>
        <ul className={style.userslist}>
{dataFriend.map(({avatar,name,isOnline,id}) => (
    <li className={style.liuser} key={id}><div className={isOnline ? style.redcirc : style.greencirc}></div><img className={style.avataruser} src={avatar} alt='avatar-user' /><p className={style.nameuser}>{name}</p> </li>
))}
        </ul>
        </section>
    )
}
ListFriends.propTypes = {
dataFriend: propTypes.array
}