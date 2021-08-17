import React from 'react'
import './header.css'
import {MoneyCollectFilled} from '@ant-design/icons'

export default function Header() {
    return (
        <div className="header-container .container-fluid">
            <div className="title">
            <MoneyCollectFilled/>
            <label> Song's Crypto Monitoring</label>
            </div>
        </div>
    )
}
