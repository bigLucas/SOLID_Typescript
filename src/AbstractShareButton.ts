import EventHandler from './EventHandler';

// Using abstract, the class connot be instantiated, it must be
// extended in another class that will implement the abstract methods
export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;

    // dependency injection
    // The class depends on EventHandler and 
    // doesn't know the implementation of EventHandler 
    constructor(eventHandler: EventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): () => Window | null | void;

    // design pattern, template methods, a logic in super class
    // and delegate the implementation to the cubclasses
    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.className, 'click', action);
    }
}