import propTypes from "prop-types"
export const ListFriends = ({dataFriend}) => {
    return (
        <section>
        <ul className="users-list">
{dataFriend.map(({avatar,name,isOnline,id}) => (
    <li className="li-user" key={id}><div className={isOnline ? 'red-circ' : 'green-circ'}></div><img className="avatar-user" src={avatar} alt='avatar-user' /><p className="name-user">{name}</p> </li>
))}
        </ul>
        </section>
    )
}
ListFriends.propTypes = {
dataFriend: propTypes.array
}