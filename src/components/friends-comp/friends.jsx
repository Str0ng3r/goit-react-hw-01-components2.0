export const ListFriends = ({dataFriend}) => {
    return (
        <ul className="users-list">
{dataFriend.map((item) => (
    <li className="li-user" key={item.id}><div className={item.isOnline ? 'red-circ' : 'green-circ'}></div><img className="avatar-user" src={item.avatar} alt='avatar-user' /><p className="name-user">{item.name}</p> </li>
))}
        </ul>
    )
}
// : <div className="red-circ"></div>}