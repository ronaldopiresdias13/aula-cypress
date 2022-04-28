describe("Testando Formulario", () => {
    it("Preenchendo o formulário", () => {
        //Acessando a URL base 
        cy.visit("/");
        //Selecionando o FORM
        cy.get("form");

        cy.get('input[name="name"]')
            .type("Ronaldo")
            .should("have.value", "Ronaldo");

        cy.get('input[name="email"]')
            .type("ronaldo@dev.com")
            .should("have.value", "ronaldo@dev.com");

        cy.get("textarea")
            .type("Esta é a mensagem a ser enviada!")
            .should("have.value", "Esta é a mensagem a ser enviada!");

        cy.server();
        cy.route({
          url: "/users/**",
          method: "POST",
          response: { status: "Saved", code: 201 }
        });
        cy.get("form").submit();


    });
});