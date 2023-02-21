import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Check each page', () => {
  beforeEach(() => {
    cy.window().then((win) => win.localStorage.setItem('umami.disabled', 'true'));
  });

  it('should display home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Danny Hines');
  });

  it('should display about page', () => {
    cy.visit('/about');
    cy.get('h1').should('contain', "Hi, I'm Danny");
  });

  it('should display blog page', () => {
    cy.visit('/blog');
    cy.get('h1').should('contain', 'Blog');
  });

  it('should display library page', () => {
    cy.visit('/snippets');
    cy.get('h1').should('contain', 'Snippets');
  });

  it('should display projects page', () => {
    cy.visit('/projects');
    cy.get('h1').should('contain', 'Projects');
  });
});
