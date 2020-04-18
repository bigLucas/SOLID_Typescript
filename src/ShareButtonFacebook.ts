import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonFacebook extends AbstractShareButton {

    constructor(className: string, url: string) {
        super(className, url);
    }

    createLink(): string {
        return `https://facebook.com/sharer.php?u=${this.url}`;
    }
}