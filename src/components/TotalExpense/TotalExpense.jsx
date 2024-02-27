import React from 'react';
import './TotalExpense.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export function TotalExpense() {
    return (
        <div className="total-expense">
            <div className="total-expense-amount">
                <AccountBalanceWalletIcon sx={{ fontSize: '0.7em' }} /> 50000 &#x20B9;
            </div>
            <div className="month">This Month</div>
        </div>
    );
}