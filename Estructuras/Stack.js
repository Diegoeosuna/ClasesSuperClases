class node {
    constructor () {
        this.value = this.value
        this.next = null
    }
}

class Stack {
    constructor () {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    //Retorna el último elemento de la pila, pero no lo remueve
    peek () {
        return this.top
    }

    push (value) {
        const newMode = new Mode(value)
        if (this.length === 0) {
            this.top = newMode
            this.bottom = newMode
        } else {
            const holdingPointer = this.top
            this.top = newMode
            this.top.next = holdingPointer
        }
    this.length++
    return this
    }
}
