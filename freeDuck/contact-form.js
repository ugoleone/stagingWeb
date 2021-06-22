var datiForm = {
    activityTipe:'',
    type:'',
    model:'',
    color:''
}

function goToTab(tabID) {
    var tabs = document.getElementsByClassName("tabCont");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabID).style.display = "flex";
    
    var tabIndicatorName = 'tab-'+tabID;
    if (tabIndicatorName == "tab-form-secondaSchedaAzienda")
        tabIndicatorName = 'tab-form-secondaSchedaPrivato';
    var otherTabs = document.getElementsByClassName('tabs');
    for (i = 0; i < otherTabs.length; i++) {
        otherTabs[i].classList.remove('activeFormTab');
    }
    document.getElementById(tabIndicatorName).classList.toggle("activeFormTab");
    
}

function backToType() {
    if (datiForm.activityTipe == "Privato")
        goToTab('form-secondaSchedaPrivato');
    else if (datiForm.activityTipe == "Azienda")
        goToTab('form-secondaSchedaAzienda');
    else
        goToTab('form-primaScheda');
}

function setActivityType(selectedType, nextTabID) {
    datiForm.activityTipe = selectedType;
    console.log(datiForm);
    goToTab(nextTabID);
}

function setClientType(selectedType, nextTabID) {
    datiForm.type = selectedType;
    console.log(datiForm);
    goToTab(nextTabID);
}

function setModel(element, selectedModel) {
    datiForm.model = selectedModel;
    console.log(datiForm);
    var otherModels = document.getElementsByClassName('form-typeSelector');
    for (i = 0; i < otherModels.length; i++) {
        otherModels[i].classList.remove('form-typeSelector-activated');
    }
    element.classList.toggle('form-typeSelector-activated');
}

function setColor(element, selectedColor) {
    datiForm.color = selectedColor;
    console.log(datiForm);
    var otherColors = document.getElementsByClassName('form-colorSelector');
    for (i = 0; i < otherColors.length; i++) {
        otherColors[i].classList.remove('form-colorSelector-activated');
    }
    element.classList.toggle('form-colorSelector-activated');
}

function goFinalForm() {
    if(datiForm.model!="" && datiForm.color!="")
        goToTab('form-quartaScheda')
}