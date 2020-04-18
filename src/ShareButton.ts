export default class ShareButton {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    // esta classe possui motivos para mudar
    // caso seja adicionado novas redes socias precisa implementar novos metodos
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
        // acoplamento com o DOM
        const elements = document.querySelectorAll(className);
        elements.forEach(element => element.addEventListener('click', () => window.open(link)));
    }
}