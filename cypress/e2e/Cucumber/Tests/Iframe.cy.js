import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import VerificarIframe from "../Pages/VerifcandoIframe.cy";

const verifcandoIframe = new VerificarIframe();


Given('estou na página do iframe', () => {
   cy.visitandoSite()
})  

When('eu acessar o iframe', () => {
    verifcandoIframe.VerificarIframe();
})

Then('o conteúdo do iframe deve conter "Your content goes here.', () => {

})

