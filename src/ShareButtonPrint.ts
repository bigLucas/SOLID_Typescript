import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(className: string, url: string) {
        super(className, url);
    }

    // esse método quebra o principio de liskov substitution
    // this button doesn't have a link to create a link
    createLink(): string {
        throw new Error('unsupported method exception');
    }
}