import EventHandler from './EventHandler';

// usando o abstract a gente não deixa que a classe seja
// instanciavel, ela precisa ser extendida em outra classe
// que vai implementar os métodos
export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;

    // injeção de dependencia
    // a classe depende de EventHandler e não conhece as implementações de event handler
    constructor(eventHandler: EventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): () => Window | null | void;

    // padrão de projeto, template methods, montar uma logica na super classe
    // e delegar a implementação para as subclasses
    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, 'click', action);
    }
}