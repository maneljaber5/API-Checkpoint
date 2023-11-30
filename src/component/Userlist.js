import React from 'react'
import Card from 'react-bootstrap/Card'

function Userlist({users}) {
  return (
    <div className='cardd'>
        {users.map((el)=> 
         <Card style={{ width: '18rem' }}>
         <Card.Body>
           <Card.Title>{el.name}</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
           <Card.Text>
           {el.email}
           </Card.Text>
           
         </Card.Body>
       </Card>
        )}
    </div>
  )
}

export default Userlist