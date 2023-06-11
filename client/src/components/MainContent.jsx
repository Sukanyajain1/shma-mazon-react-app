import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';

const MainContent = () => {
    return (
        <>
            <h1>this is the MainContent component</h1>
            <Outlet/>
        </>
    );
}

export default MainContent;