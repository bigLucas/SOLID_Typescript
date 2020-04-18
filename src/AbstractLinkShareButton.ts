import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(eventHandler: EventHandler, className: string, url: string) {
        super(eventHandler, className);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): () => Window | null | void {
        const link = this.createLink();
        return () => window.open(link);
    }
}