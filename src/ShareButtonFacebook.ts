import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(className: string, url: string) {
        super(className, url);
    }

    createLink(): string {
        return `https://facebook.com/sharer.php?u=${this.url}`;
    }
}