import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductBox({product}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} height={200}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProductBox