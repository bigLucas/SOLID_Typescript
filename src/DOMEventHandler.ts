import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
    addEventListenerToClass(className: string, event: string, fn: any): void {
        const elements = document.querySelectorAll(className);
        elements.forEach(element => element.addEventListener(event, fn));
    }
}