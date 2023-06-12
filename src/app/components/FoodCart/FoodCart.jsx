import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FoodCart = ({ finalQuantity }) => {
  const [cartCount, setCartCount] = useState(0)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const values = Object.values(finalQuantity)
    const sum = values.reduce((acc, curr) => acc + curr, 0)
    setCartCount(sum)
    setShowNotification(true)
    showNotificationFunc()
  })

  const showNotificationFunc = (event) => {
    if (cartCount > 0) {
      toast.success('Cart is Updated', {
        toastId: 'success1',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Duration in milliseconds
      })
      setShowNotification(false)
    }
  }

  return (
    <div style={{ margin: 24, marginBottom: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'end' ,borderBottom:"1px solid lightgrey",paddingBottom:8}}>
        <h3 style={{ color: 'black', paddingRight: 8 }}>Prakrithi Shetty</h3>
        <div>
          <img src="/carticon.jpeg" alt="Cart Icon" width={24} height={24} />

          <span
            style={{
              borderRadius: '50%',
              border: '1px solid red',
              fontSize: 12,
              position: 'absolute',
              height: 20,
              width: 20,
              textAlign: 'center',
              top: 9,
              right: 9,
              background: 'red',
            }}
          >
            {cartCount}
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default FoodCart
