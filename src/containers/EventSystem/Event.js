
 const Event = {
    events: {},

    on(eventName, callBack) {
        this.events[eventName] = callBack;
    },

    fire(eventName) {
        
        if(!this.events[eventName]) {
            return;
        }
        this.events[eventName]();
    }

}

export default Event;