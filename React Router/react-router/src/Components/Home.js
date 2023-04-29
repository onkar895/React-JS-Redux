import { useNavigate } from 'react-router-dom'

//  useNavigate() hook returns a method that allows us to navigate from one link to another. 

const Home = () => {

    const navigate = useNavigate()
    
  return (
    <>
      <h2>Welcome to Home Page</h2>
      <br />
      <button style={{ backgroundColor: 'rgb(41, 69, 95)',
            color: 'White',
            Padding: '10px',
            width: '140px',
            height: '40px',
            cursor: 'pointer', 
            borderRadius : '5px'}} onClick={() => navigate('order-summary')}>
        Place Order Now
      </button>
    </>
  )
}

export default Home
