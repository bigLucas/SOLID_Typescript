import EventHandler from './EventHandler';

export default class ShareButton {
    url: string;
    eventHandler: EventHandler;

    constructor(url: string) {
        this.url = url;
        // quebra o principio dependency inversion
        this.eventHandler = new EventHandler();
    }

    // esta classe possui motivos para mudar
    // caso seja adicionado novas redes socias precisa implementar novos metodos
    // quebra o principio do open-closed
    bind(className: string, socialNetwork: string) {
        let link: string;
        if (socialNetwork === 'twitter') {
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if (socialNetwork === 'facebook') {
            link = `https://facebook.com/sharer.php?u=${this.url}`;
        }
        if (socialNetwork === 'linkedin') {
            link = `https://linkedin.com/shareArticle?url=${this.url}`;
        }
       this.eventHandler.addEventListenerToClass(className, 'click', () => window.open(link));
    }
}