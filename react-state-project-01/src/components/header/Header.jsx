import chefIcon from '@/assets/chef.svg'
import './Header.css'

function Header(){
return(
    <header className='header-banner'>
        <img className="chefIcon" src={chefIcon} alt="A chef icon"/>
        <span className="title">Chef Claude</span>
    </header>
)
}

export default Header