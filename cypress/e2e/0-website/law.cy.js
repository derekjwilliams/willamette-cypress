/// <reference types="cypress" />

// This spec file contains a simple tests for the Willamette landing page

describe('Willamette Home Page, Above the fold', () => {

  const linkToIndex = new Map([
    ["admissions", 0],
    ["current_students", 1],
    ["faculty", 2],
    ["library", 3],
    ["careers", 4],
    ["equity_initiatives", 5],
    ["donate", 6],
  ])
  beforeEach(() => {
    cy.visit('https://willamette.edu/law/index.html')
  })

  it('Displays the navigation menu with N items', () => {
    const baseSelector = '.site-header__nav ul .site-header__nav__list a'
    const expectedMenuLength = linkToIndex.size
    cy.get(baseSelector).should('have.length', expectedMenuLength)

    // Check the menu items text (case insensitive)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('admissions')).invoke('text').should('match', /admissions/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('current_students')).invoke('text').should('match', /current students/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('faculty')).invoke('text').should('match', /faculty/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('library')).invoke('text').should('match', /library/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('careers')).invoke('text').should('match', /careers/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('equity_initiatives')).invoke('text').should('match', /equity initiatives/i)
    cy.get(`${baseSelector}`).eq(linkToIndex.get('donate')).invoke('text').should('match', /give/i)
  })
})