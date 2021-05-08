class NewAccount {
    #dom
    constructor(dom) {
        this.#dom = dom;
        this.signUpEvent();
        this.backEvent();
    }

    signUpEvent(){
        this.#dom.querySelector('.newAccount-submit').addEventListener('click', async ()=>{
            const response = await fetch('http://localhost:3000/signup', {
                mode: 'cors',
                credentials: 'include',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({test: 'test'})
            })
        })
    }

    backEvent(){
        this.#dom.querySelector('.newAccount-back').addEventListener('click',()=>{
            location.href='client.html'
        })

    }

    getID(){
        return this.#dom.querySelector('.newAccount-idInput').value
    }
    getPW(){
        return this.#dom.querySelector('.newAccount-pwInput').value
    }
    getPWCK(){
        return this.#dom.querySelector('.newAccount-nameInput').value
    }
    getNick(){
        return this.#dom.querySelector('.newAccount-sexInput').value
    }

}