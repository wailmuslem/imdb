describe('Awards and events', () => {
    it('Find awards and events', () => {
    cy
    .visit('https://www.imdb.com/')

    .get('#imdbHeader-navDrawerOpen > #iconContext-menu > [d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"]')
    .click()

    .get(':nth-child(3) > ._2Q0QZxgQqVpU0nQBqv1xlY > [data-testid="category-expando"] > ._2aunAih-uMfbdgTUIjnQMd')
    .should('be.visible')
    .click()

    .get('[href="/oscars/?ref_=nv_ev_acd"] > .ipc-list-item__text')
    .click()

    .get(':nth-child(3) > .ab_widget > .ab_ninja > .seemore')
    .should('have.length', 1)
    .first()
    .click()


})
})
