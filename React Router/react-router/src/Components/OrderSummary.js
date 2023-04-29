import { useNavigate } from "react-router-dom"

const OrderSummary = () => {

    const navigate = useNavigate()
  return (
    <>
          <h2>Order Confirmed...!</h2>
           <button style={{ backgroundColor: 'rgb(41, 69, 95)',
            color: 'White',
            Padding: '10px',
            width: '140px',
            height: '40px',
            cursor: 'pointer', 
            borderRadius : '5px'}} onClick={() => navigate(-1)}>
            Go Back
      </button>
    </>
  )
}

export default OrderSummary
