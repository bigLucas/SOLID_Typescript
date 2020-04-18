import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonTwitter extends AbstractLinkShareButton {

    constructor(className: string, url: string) {
        super(className, url);
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}