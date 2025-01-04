import React from 'react'
import {Container, Logo, LogoutButton} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 w-full shadow bg-black'>
      <Container>
        <nav className='flex'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
            <Link to='/'>
              <Logo width='70px'/>
              </Link>
          </div>
          <ul className='flex items-center gap-6 text-sm'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='block rounded-full bg-black px-4 py-2 text-sm font-medium group-hover:bg-transparent text-white'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header