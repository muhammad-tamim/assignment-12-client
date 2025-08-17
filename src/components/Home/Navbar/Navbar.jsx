import { AiOutlineMenu } from 'react-icons/ai'
import { FaGlobeAmericas, FaShoppingCart } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router'
import avatarImg from '../../../assets/images/placeholder.jpg'
import logo from '../../../assets/images/logo.svg'
import Container from '../../container/Container'
import useAuth from '../../../hooks/useAuth'

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)


    const [theme, setTheme] = useState('light');

    // Apply theme to <html>
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='fixed w-full bg-gradient-to-r from-[#6BDCF6] to-[#25A8D6] z-10 shadow-sm text-white'>
            <div className='py-4'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <Link to='/' className='text-xl md:text-2xl font-bold flex items-center gap-1'>
                            <img src={logo} alt='logo' className='w-8 h-8' />
                            <span>MedEasy</span>
                        </Link>

                        {/* Nav Links */}
                        <div className='hidden md:flex items-center gap-6'>
                            <NavLink to='/' className={({ isActive }) => `${isActive ? 'underline font-semibold' : ''}`} >
                                Home
                            </NavLink>
                            <NavLink
                                to='/shop'
                                className={({ isActive }) =>
                                    `${isActive ? 'underline font-semibold' : ''}`
                                }
                            >
                                Shop
                            </NavLink>
                            <NavLink
                                to='/cart'
                                className={({ isActive }) =>
                                    `${isActive ? 'underline font-semibold' : ''}`
                                }
                            >
                                Cart
                            </NavLink>


                            {!user && (
                                <NavLink
                                    to='/login'
                                    className={({ isActive }) =>
                                        `${isActive ? 'underline font-semibold' : ''}`
                                    }
                                >
                                    Join Us
                                </NavLink>
                            )}
                        </div>

                        {/* Right Side: Profile Dropdown*/}
                        <div className='flex gap-2 lg:gap-4 items-center'>
                            <button className="btn btn-ghost btn-circle border border-neutral-200 transition" onClick={handleThemeToggle}>
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>

                            <div className='relative'>
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-2 border-[1px] border-neutral-200 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu className='text-white' />
                                    <img
                                        className='rounded-full'
                                        referrerPolicy='no-referrer'
                                        src={user?.photoURL || avatarImg}
                                        alt='profile'
                                        height='30'
                                        width='30'
                                    />
                                </div>

                                {/* Dropdown Content */}
                                {isOpen && (
                                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden right-0 top-12 text-sm z-50'>
                                        <div className='flex flex-col cursor-pointer text-black'>
                                            <div className='md:hidden flex flex-col'>
                                                <Link
                                                    to='/'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Home
                                                </Link>
                                                <Link
                                                    to='/shop'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Shop
                                                </Link>
                                                <Link
                                                    to='/cart'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Cart
                                                </Link>
                                                {!user && <Link
                                                    to='/login'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Join Us
                                                </Link>}
                                            </div>

                                            {user ? (
                                                <>
                                                    <Link
                                                        to='/update-profile'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Update Profile
                                                    </Link>
                                                    <Link
                                                        to='/dashboard'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <div
                                                        onClick={() => {
                                                            setIsOpen(false)
                                                            logOut()
                                                        }}
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                                    >
                                                        Logout
                                                    </div>
                                                </>
                                            ) : (
                                                <p
                                                    className='px-4 py-3 text-xs text-red-400'
                                                >
                                                    Please Login to see below features
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar