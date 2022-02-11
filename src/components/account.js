import React from 'react';

function Account({wallet}) {
    return (
        <div id="account">
            <h1>Portefeuille : {wallet}¥</h1>
        </div>
    )
}

export default Account;
