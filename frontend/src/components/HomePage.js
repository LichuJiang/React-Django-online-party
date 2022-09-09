import React from "react";
import './App.css';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";

function HomePage() {
    return (
        <>
        <div className = "HomePage">
            <p>This is the HomePage</p>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/join">join</Link>
                </li>
                <li>
                    <Link to="/create">create</Link>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    );
}

export default HomePage;