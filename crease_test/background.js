console.log('Background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("Tab active:", tab);
} 