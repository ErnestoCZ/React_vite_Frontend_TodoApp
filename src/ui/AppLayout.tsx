import {FC} from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

export const AppLayout: FC = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <Outlet/>
        </div>
    )
}