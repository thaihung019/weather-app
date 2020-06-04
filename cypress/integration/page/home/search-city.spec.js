describe('Search City', () => {

  it('Should get list city successfully after input', () => {
    const searchText = 'San'
    cy.get('#rc_select_0').type(searchText);

    cy.request('GET', 'weather/2487956').then((response) => {
      expect(response.status).eq(200);

      cy.get(':nth-child(1) > .ant-select-item-option-content').should('exist');
    });
  })

  it('Should get data after select city', () => {
    cy.get(':nth-child(1) > .ant-select-item-option-content').click();

    cy.get('#rc_select_0').invoke('val').should('include', 'San Francisco');

    cy.get('.full-day-detail__city > .ant-typography').contains('San Francisco - California');
  })
});
