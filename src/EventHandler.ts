export default class EventHandler {
    addEventListenerToClass(className: string, event: string, fn: any) {
        const elements = document.querySelectorAll(className);
        elements.forEach(element => element.addEventListener(event, fn));
    }
}