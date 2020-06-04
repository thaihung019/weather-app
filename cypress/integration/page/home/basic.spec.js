describe('Open App', () => {
  it('Should open app successfully', () => {
    cy.get('.ant-typography').should('exist');
  })

  it('Should get default city successfully', () => {
    cy.request('GET', 'city/1252431').then((response) => {
      expect(response.status).eq(200);

      cy.get('.full-day-detail__city > .ant-typography').contains('Ho Chi Minh City - Vietnam');
    });
  })
});
