import React from 'react'
import './header.css'
import {MoneyCollectFilled} from '@ant-design/icons'

export default function Header() {
    return (
        <div className="header-container">
            <div className="title">
            <MoneyCollectFilled/>
            <label> Song Market Coint</label>
            </div>
        </div>
    )
}
