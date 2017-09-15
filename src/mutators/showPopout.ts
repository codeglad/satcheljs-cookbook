import {mutator} from 'satcheljs';
import {showPopout, hidePopout} from '../actions/popout';
import getStore from '../store/store';

mutator(showPopout, () => {
    getStore().showPopout = true;
});

mutator(hidePopout, () => {
    getStore().showPopout = false;
});