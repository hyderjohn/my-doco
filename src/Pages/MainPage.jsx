import { Divider } from 'antd'
import Cart from '../Components/Cart'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const MainPage = () => {
  return (
    <div>
        <Header/>
        <Divider />
        <Cart/>
        <Footer/>
    </div>
  )
}

export default MainPage