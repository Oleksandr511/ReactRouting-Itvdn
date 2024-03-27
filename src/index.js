import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome'
import StateHooks from './Pages/StateHookPage/StateHook'
import './global.css';
import About from './Pages/About/About'
import Community from './Pages/Community/Community'
import Resources from './Pages/Resources/Resources'
import History from './Pages/History/History';
import ErrorPage from './Pages/Error/Error';
import Users from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import UsersData from './data/users.json'
import StudentPage from './Pages/Student/StudentPage';
// import StudentInfo from './Pages/Student/StudentInfo'


import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom'

const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Root /> }>
             <Route index  element={ <Welcome/> } />
             <Route path='/statehooks' element={<StateHooks/>}/>
             <Route path='/community' element={<Community/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/resources' element={<Resources/>}/>
             <Route path='/history' element={<History/>}/>
             <Route path='/allstudents' element={<StudentPage/>}/>
             {/* <Route path='/allstudents/:studentsId:' loader={loaderStudents} element={<StudentInfo/>} errorElement={<ErrorPage/>}/> */}
             <Route path='users' element={<Users/>}/>
             <Route path='users/:userId' loader={loader} element={<UserPage/>} errorElement={<ErrorPage/>}/>
             <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

function loader( {params} ) {
    const user = UsersData.filter(e => e.id === params.userId)
    return user[0];
}

// function loaderStudents( {params}) {
//     const student = StudentInfo.filter(e=>e.id === params.studentsId)
//     return student[0];
// }
