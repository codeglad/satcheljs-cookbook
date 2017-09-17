import {orchestrator} from 'satcheljs';
import {showPopout} from '../actions/popout';
import Description from '../components/Description';
import BookList from '../components/BookList';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

orchestrator(showPopout, () => {
    let openedWindow = window.open(undefined, Math.random().toString(12).slice(2), 'resizable,scrollbars,status');
    (window as any).childOnUnload = function(ReactDOMInstance) {
        ReactDOM.unmountComponentAtNode((this as Window).document.getElementById('child') as any);
    };
    
    openedWindow.document.write('<!DOCTYPE html><html><body><div id="child"></div><script>window.onbeforeunload=window.opener.childOnUnload</script></body></html>');
    
    let child = openedWindow.document.getElementById('child');    
    ReactDOM.render(<div><BookList /><Description /></div>, child!);
});