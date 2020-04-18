import EventHandler from './EventHandler';

// usando o abstract a gente não deixa que a classe seja
// instanciavel, ela precisa ser extendida em outra classe
// que vai implementar os métodos
export default abstract class AbstractShareButton {
    url: string;
    eventHandler: EventHandler;
    className: string;

    constructor(className: string, url: string) {
        this.url = url;
        this.className = className;
        // quebra o principio dependency inversion
        this.eventHandler = new EventHandler();
    }

    abstract createLink(): string;

    // padrão de projeto, template methods, montar uma logica na super classe
    // e delegar a implementação para as subclasses
    bind() {
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.className, 'click', () => window.open(link));
    }
}