import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Root from './routes/root/root.route';
import SharedLayout from './routes/shared-layout/shared-layout';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Root />} />

                <Route path='view-data' element={<>Data</>} />

                <Route path='*' element={<>Error</>} />
            </Route>
        </Routes>
    );
}
