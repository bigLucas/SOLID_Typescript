import EventHandler from './EventHandler';

// usando o abstract a gente não deixa que a classe seja
// instanciavel, ela precisa ser extendida em outra classe
// que vai implementar os métodos
export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;

    constructor(className: string) {
        this.className = className;
        // quebra o principio dependency inversion
        this.eventHandler = new EventHandler();
    }

    abstract createAction(): () => Window | null | void;

    // padrão de projeto, template methods, montar uma logica na super classe
    // e delegar a implementação para as subclasses
    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, 'click', action);
    }
}