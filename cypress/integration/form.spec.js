describe("Testando Formulario", () => {
    it("Preenchendo o formulário", () => {
        //Acessando a URL base 
        cy.visit("/");
        //Selecionando o FORM
        cy.get("form");

        cy.get('input[name="name"]')
            .type("Isabella")
            .should("have.value", "Isabella");

        cy.get('input[name="email"]')
            .type("isa@dev.com")
            .should("have.value", "isa@dev.com");

        cy.get("textarea")
            .type("Esta é a mensagem a ser enviada!")
            .should("have.value", "Esta é a mensagem a ser enviada!");
        
            cy.get("form").submit();


    });
});