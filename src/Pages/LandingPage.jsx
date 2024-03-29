import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {

const buttonUrl = useNavigate()

  return (
    <>
    <Row className='d-flex justify-content-center align-items-center mt-5'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning '>Video Player</span> </h3>
        <h6 className='mt-3' style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, at ea esse similique nobis architecto quas. Magni totam explicabo natus molestias laborum voluptas iusto placeat dolor vero. Veniam, quos quasi!</h6>
        <button className='btn btn-warning mt-4' onClick={()=>buttonUrl('/home')}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
      
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="No image" />
      </Col>
    </Row>

    <div className=' container mb-5 mt-5  d-flex justify-content-center align-items-center  flex-column'>
      <h3>Features</h3>

      <div className='d-flex justify-content-evenly align-items-center '>
      <Card className='p-4 me-5' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card className='p-4 me-5' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{ width: '100%',height:'300px' }}  src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container p-5 d-flex justify-content-between align-items-center border border-2 rounded border-secondary w-100   mt-5 mb-5'>
      <Row>
        <Col lg={5}>
          <h3 className='text-warning mb-5'>Simple and Powerful  </h3>
          <h6 className='mb-5'><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nihil optio mollitia tenetur tempore, ipsa cumque?</h6>
          <h6 className='mb-5'><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nihil optio mollitia tenetur tempore, ipsa cumque?</h6>
          <h6 className='mb-5'><span className='fw-bolder fs-5'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nihil optio mollitia tenetur tempore, ipsa cumque?</h6>
        
        </Col>
        <Col></Col>
        <Col lg={6}>
          <iframe width='100%' height='400' src="https://www.youtube.com/embed/1efZpDdKLIA" title='Hrudayavum Full HD Video Song | Notebook | Parvathy Thiruvothu, Roma Asrani, Maria Roy, Skanda Ashok
' frameborder="0"></iframe>
        </Col>
      </Row>
    </div>
     
    </>
  )
}

export default LandingPage
