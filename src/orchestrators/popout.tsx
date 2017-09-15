import {orchestrator} from 'satcheljs';
import {showPopout} from '../actions/popout';
import Description from '../components/Description';
import BookList from '../components/BookList';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

orchestrator(showPopout, () => {
    const openedWindow = window.open(undefined, 'yo', 'resizable,scrollbars,status');
    openedWindow.document.write('<!DOCTYPE html><html><body><div id="child"></div></body></html>');
    ReactDOM.render(<div><BookList /><Description /></div>, openedWindow.document.getElementById('child'));
});