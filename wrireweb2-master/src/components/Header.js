import React, {Component} from 'react'
import SideBar from './SideBarAdmin'

const name = localStorage.getItem('editor_PersonName')
const Header = (props) => {
  return (
    <div className='flex justify-between w-full'>
        <div> {props.name}</div>        
        <div>{name}</div>

    </div>
  )
}

// class Header extends Component{
//   render(){
//     return
//   }
// }
export default Header