import {FC, PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';


export const LoginPage : FC<PropsWithChildren<any>> = () => {

    return (
        <div className='bg-yellow-400'>
            <h1 >LoginPage is comming soon....</h1>
            <Link to={'/todos'}>todos</Link>
        </div>
    )
}