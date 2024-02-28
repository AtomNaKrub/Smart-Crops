import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ManagePage from '../Pages/Manage/ManagePage'
import SelectPage from '../Pages/Select/SelectPage'
import DetailedSelectPage from '../Pages/DetailedSelect/DetailedSelectPage'
import ManageSetting from '../Pages/ManageSetting/ManageSetting'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/manage/:id',element: <ManagePage />},
            {path: '/select', element: <SelectPage />},
            {path: '/detailedSelect/:id', element: <DetailedSelectPage />},
            {path: '/manage/setting/:id', element: <ManageSetting />}
        ]
    }
])