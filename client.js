class Login {
    #dom
    constructor(dom) {
        this.#dom = dom;
        this.loginEvent();
        this.newAccountEvent();
    }

    loginEvent(){
        this.#dom.querySelector('.submit').addEventListener('click', () =>{

        })
    }

    newAccountEvent(){
        this.#dom.querySelector('.new-account').addEventListener('click', () => {
            location.href = 'new-account.html'
        })
    }

    getID(){
        return this.#dom.querySelector('.id-value').value;
    }
    getPW(){
        return this.#dom.querySelector('.pw-value').value;
    }

}