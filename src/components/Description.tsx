import * as React from 'react';
import {observer} from 'mobx-react';
import getStore from '../store/store';
import getSelectedBookId from '../selectors/getSelectedBookId';
import {addBookToCart} from '../actions/cart';
import * as classnames from 'classnames/bind';

const cx = classnames.bind(require('./AppStyles.css'));

@observer
export default class Description extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        const store = getStore();
        const selectedBookId = getSelectedBookId();
        const book = selectedBookId !== null && store.books[selectedBookId];

        if (this.state.hasError) {
            return <div>ERROR!</div>;
        }

        return (<div className={cx('description')}>
            {book && <h2>{book.name}</h2>}
            {book ? book.description : 'Select a book to see description'}
            {selectedBookId && (
                <div>
                    <button onClick={() => addBookToCart(selectedBookId!)}>Add to Cart</button>
                </div>
            )}
        </div>);
    }
}