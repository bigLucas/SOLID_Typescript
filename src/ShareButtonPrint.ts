import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(className: string) {
        super(className);
    }

    createAction(): () => Window | null | void {
        return () => window.print();
    }
}