import {browser} from "@wdio/globals";
import { Element } from 'webdriverio';

class MainPage {
    public get itemsTodo (): Element[] {
        return $$('#item-card')
    }

    public get itemsBoard(): Element[] {
        return $$('#column-list')
    }

    public get itemsAddCard(): Element[] {
        return $$('#add-card')
    }

    public async pause() {
        await browser.pause(5000)
    }

    public async dragAndDropTodo (idTodo: number, idBoard: number) {
        const sourceElement = await this.itemsTodo[idTodo];
        const targetElement = await this.itemsBoard[idBoard];

        await sourceElement.dragAndDrop(targetElement)
    }

    public async addCard(idBoard: number) {
        const addElCard = await this.itemsAddCard[idBoard];
        await addElCard.click();
    }

    public async countCardsBoard(idBoard: number) {
        return (await this.itemsBoard[idBoard].$$('#item-card').length)
    }

    async open() {
        await browser.url('http://localhost:3000/');
    }
}

export default new MainPage();
