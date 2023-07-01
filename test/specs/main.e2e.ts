import MainPage from "../pageobjects/main.page";

describe('Drag card tests', () => {
    it('Drop card on other board', async () => {
        await MainPage.open();
        await MainPage.dragAndDropTodo(3, 2);
        await MainPage.pause();
    })

    // it('Add card on board', async () => {
    //     const idBoard = 1;
    //     await MainPage.open();
    //     const startCard = await MainPage.countCardsBoard(idBoard)
    //     await MainPage.addCard(idBoard);
    //     const endCard = await MainPage.countCardsBoard(idBoard)
    //     expect(startCard).toBe(endCard-1);
    // })
})

export {}