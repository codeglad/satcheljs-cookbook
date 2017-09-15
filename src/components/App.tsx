import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import getStore from '../store/store';
import BookList from './BookList';
import Cart from './Cart';
import CategoryList from './CategoryList';
import Description from './Description';
import PopoutContent from './PopoutContent';
import {showPopout} from '../actions/popout';

require('./AppStyles.css');

export default observer(() => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div>
                    <div style={{display: 'flex'}}>
                        <CategoryList />
                        <BookList />
                    </div>
                    <div>
                        <h2>Shopping Cart</h2>
                        <Cart />
                    </div>
                </div>
                <Description />
            </div>
            <div>
                <button onClick={() => showPopout()}>Show Popout</button>
            </div>
        </div>);
});