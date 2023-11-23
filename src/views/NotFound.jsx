import Container  from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  
  const navigate = useNavigate()

  return (
    <Container>
      <h1 className='text-center mt-5 pt-5'>Upss la pagina que buscas, no existe!!!!!</h1>
      <div className='text-center mt-5 pt-5 pt-2'>
        <Button
          variant='danger'
          onClick={() => {
            navigate(`/home`)
          }}
        >
          Regresar
        </Button>
      </div>
    </Container>
  )
}
export default NotFound