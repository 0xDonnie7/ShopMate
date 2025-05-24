// import { Link, Outlet, useLocation } from 'react-router-dom';

// export default function AuthLayout() {
//     const location = useLocation();
//     const isLogin = location.pathname.endsWith("login");

//     return (
//         <div className='mt-20 w-[31vw] min-w-[28rem] max-w-full mx-auto px-4 p-5 rounded-lg shadow-lg'>
//             <nav className='flex justify-between w-2/5 mx-auto text-center my-2'>
//                 <Link
//                     to="/auth/login"
//                     className={`relative px-4 py-2 text-lg mr-2 rounded transition-all duration-300
//                         ${isLogin
//                             ? 'text-black after:content-[""] after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-blue-500 after:rounded'
//                             : 'text-black'}
//                         `}
//                 >
//                     Login
//                 </Link>

//                 <Link
//                     to="/auth/signup"
//                     className={`relative px-4 py-2 text-lg rounded transition-all duration-300
//                         ${!isLogin
//                             ? 'text-black after:content-[""] after:absolute after:inset-x-0 after:-bottom-1 after:h-1 after:bg-blue-500 after:rounded'
//                             : 'text-black'}
//                         `}
//                 >
//                     Signup
//                 </Link>

//             </nav>
//             <div className="mt-4">
//                 <Outlet />
//             </div>
//         </div>
//     );
// }

import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AuthLayout() {
    const location = useLocation();
    const isLogin = location.pathname.endsWith("login");

    return (
        <div className='mt-20 w-[32vw] min-w-[22rem] max-w-full mx-auto px-4 p-5 rounded-lg shadow-lg'>
            <nav className='relative flex justify-between w-2/5 mx-auto text-center my-2'>

                <Link
                    to="/auth/login"
                    className="w-1/2 text-lg text-center py-2 relative font-bold"
                >
                    Login
                </Link>

                <Link
                    to="/auth/signup"
                    className="w-1/2 text-lg text-center py-2 relative font-bold"
                >
                    Signup
                </Link>

                {/* Animated underline */}
                <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute bottom-0 h-1 bg-blue-500 rounded"
                    style={{
                        width: '50%',
                        left: isLogin ? '0%' : '50%',
                    }}
                />
            </nav>

            <div className="mt-4">
                <Outlet />
            </div>
        </div>
    );
}
