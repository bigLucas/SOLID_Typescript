import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

    constructor(className: string, url: string) {
        super(className, url);
    }

    createLink(): string {
        return `https://linkedin.com/shareArticle?url=${this.url}`;
    }
}