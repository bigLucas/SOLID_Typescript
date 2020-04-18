import AbstractShareButton from './AbstractShareButton';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(className: string, url: string) {
        super(className);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): () => Window | null | void {
        const link = this.createLink();
        return () => window.open(link);
    }
}