import { LightningElement } from 'lwc';

export default class Main extends LightningElement {
    showHighlights = false;
    showAboutMe = false;
    showCareerJourney = true;
    showLinks = false;
    selectedClasses = "slds-nav-vertical__item slds-is-active";
    unselectedClasses = "slds-nav-vertical__item";

    clickHighlights(){
        this.showHighlights = true;
        this.template.querySelector("li[name='menuHighlights']").classList.add("slds-is-active");

        this.showAboutMe = false;
        this.template.querySelector("li[name='menuAboutMe']").classList.remove("slds-is-active");

        this.showCareerJourney = false;
        this.template.querySelector("li[name='menuCareerJourney']").classList.remove("slds-is-active");

        this.showLinks = false;
        this.template.querySelector("li[name='menuLinks']").classList.remove("slds-is-active");
    }

    clickAboutMe(){
        this.showAboutMe = true;
        this.template.querySelector("li[name='menuAboutMe']").classList.add("slds-is-active");

        this.showHighlights = false;
        this.template.querySelector("li[name='menuHighlights']").classList.remove("slds-is-active");

        this.showCareerJourney = false;
        this.template.querySelector("li[name='menuCareerJourney']").classList.remove("slds-is-active");

        this.showLinks = false;
        this.template.querySelector("li[name='menuLinks']").classList.remove("slds-is-active");
    }

    clickCareerJourney(){
        this.showCareerJourney = true;
        this.template.querySelector("li[name='menuCareerJourney']").classList.add("slds-is-active");

        this.showAboutMe = false;
        this.template.querySelector("li[name='menuAboutMe']").classList.remove("slds-is-active");

        this.showHighlights = false;
        this.template.querySelector("li[name='menuHighlights']").classList.remove("slds-is-active");

        this.showLinks = false;
        this.template.querySelector("li[name='menuLinks']").classList.remove("slds-is-active");
    }
    clickLinks(){
        this.showLinks = true;
        this.template.querySelector("li[name='menuLinks']").classList.add("slds-is-active");

        this.showCareerJourney = false;
        this.template.querySelector("li[name='menuCareerJourney']").classList.remove("slds-is-active");

        this.showAboutMe = false;
        this.template.querySelector("li[name='menuAboutMe']").classList.remove("slds-is-active");

        this.showHighlights = false;
        this.template.querySelector("li[name='menuHighlights']").classList.remove("slds-is-active");
    }
}