import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Profile = () => {
  return (
    <div>    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4D03AQGCDK5h1rAYzA/profile-displayphoto-shrink_200_200/0/1662032811149?e=1683763200&v=beta&t=K4K3h5FTufWdzScNF2q1id98CRXA_KxcJQPDPQcLaOg" />
    <Card.Body>
      <Card.Title>Hassen Kaffel </Card.Title>
      <Card.Text>
    je suis un ingénieur logiciel chevronné avec plus de 5 années d'expérience dans le développement de logiciels pour des entreprises de toutes tailles. j ai expert dans les langages de programmation tels que java ,python,javascipt et possède une expérience approfondie dans la conception, le développement et la mise en œuvre de solutions logicielles complexes.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Mail:hassenkaffel99@gmail.com</ListGroup.Item>
      <ListGroup.Item>Adresse:Ben arous </ListGroup.Item>
      <ListGroup.Item>Num:87999666</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Profile