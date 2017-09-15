import * as React from 'react';
import Description from './Description';
import getStore from '../store/store';
import getSelectedBookId from '../selectors/getSelectedBookId';
import {observer} from 'mobx-react';

@observer
export default class PopoutContent extends React.Component<any, any> {
    render() {
        const store = getStore();
        const book = getSelectedBookId() ? store.books[getSelectedBookId()!] : null;
        return (<div>
            {book ? book.description : 'no book selected'}
        </div>);
    }
}