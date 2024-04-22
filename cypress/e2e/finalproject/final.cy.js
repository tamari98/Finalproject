describe("user registration", () => {
    it("registration with correct information", () => {
        cy.visit("https://zootopia.ge/ka")
        cy.viewport(1030,700)
        cy.get('.iprof').click()
        cy.contains("გაიარეთ რეგისტრაცია").should("be.visible")
        cy.contains("გაიარეთ რეგისტრაცია").click()
        cy.get('[name="first_name"]').type("tina tinadze")
        cy.get('[name="personal_id"]').type(12571712181)
        cy.get('[name="reg_email"]').type("tina.ratiani108+12@gmail.com")
        cy.get('[name="phone"]').type(551775100)
        cy.get('[name="reg_password"]').type("paroli")
        cy.get('[name="reg_password_confirmation"]').type("paroli")
        cy.get("#Path_10302").click()
        cy.get(".regsub").click()
        cy.get('.bg-transparent').click()
        cy.get('.srch-cart-prof > .iprof > p').should("be.visible")
    })
    
    })



    describe("login", () => {
it ("login with correct information", () => {
    cy.visit("https://zootopia.ge/ka")
    cy.viewport(1030,700)
    cy.get('.iprof').click()
    cy.get('[name="login_email"]').type("tina.ratiani108+12@gmail.com")
    cy.get('.ipass').type("paroli")
    cy.get(".form-button").contains("ავტორიზაცია").should("be.visible")
    cy.get(".form-button").contains("ავტორიზაცია").click()
    cy.get('.srch-cart-prof > .iprof > p').should("have.text","ჩემი გვერდი")

})
    })



describe("search", () => {
    it ("search products", () => {
        cy.visit("https://zootopia.ge/ka")
        cy.viewport(1030,700)
        cy.get(".isearch").click().get('.srch2-inp').type("Bosch HPC MENUE")
        cy.get('.search-all > a').click()

    })
})



describe("basket", () => {
    it ("add products in basket", () => {
        cy.visit("https://zootopia.ge/ka")
        cy.viewport(1030,700)
        cy.get('.kata > .seepro').click()
        cy.get('[data-id="512"]').click()
        cy.get('[data-id="1282"]').click()
        cy.get('[data-id="1285"]').click()
        cy.get("#cart-items-count").should('have.text','3')
        cy.get('.icart').click()
        cy.contains("522020NO").should("be.visible")
        cy.contains("#PSANCLAT010L31").should("be.visible")
        cy.contains("#PSANPLUT010L31").should("be.visible")
 })
})



describe('product purchase', () => {
    it ('product purchase with bank transfer', () => {
        cy.visit("https://zootopia.ge/ka")
        cy.viewport(1030,700)
        cy.get('.iprof').click()
        cy.get('[name="login_email"]').type("tina.ratiani98+2@gmail.com")
        cy.get('.ipass').type("paroli")
        cy.get(".form-button").contains("ავტორიზაცია").click()
        cy.get(".isearch").click().get('.srch2-inp').type('Animonda Carny Adult')
        cy.get('.search-all > a').click()
        cy.contains("Animonda Carny Adult 200g Beef + chicken").should("be.visible")
        cy.get('[data-id="1103"]').click()
        cy.get('.icart').click()
        cy.get('.location').type('pekinis 10')
        cy.contains("საბანკო გადარიცხვა").click()
        cy.get('.cart-submit').should("have.text","გადახდა")
        cy.get('.cart-submit').click()
        cy.get('#modal-box-success-message').should("be.visible")
    })
})



describe("basket", () => {
        it ("delete products from basket", () => {
            cy.visit("https://zootopia.ge/ka")
            cy.viewport(1030,700)
            cy.get('.tevzi > .tLink').click()
            cy.get('[data-id="1793"]').click()
            cy.get('[data-id="770"]').click()
            cy.get('.icart').click()
            cy.contains("2111500").should("be.visible")
            cy.contains("A965").should("be.visible")
            cy.get("#Ellipse_42").click()
            cy.get("#Ellipse_42").click()
            cy.contains('კალათა ცარიელია').should('be.visible')
        })
})