


export default function Profile({user}) {
    return (
        <div className='profileInfo'>
            
            <span>NAME:{user.full_name}</span>
            <span>EMAL:{user.email}</span>
            <span>@{user.username}</span>
            <span>#{user.phone_number}</span>
            <span>********</span>
            <span>BOOKS:{user.books.length}</span>
        </div>
    )
}