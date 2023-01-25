let mylinks=[];

let buttonSave = document.getElementById("save") ;
let TabSave = document.getElementById("TAB") ;
let link = document.getElementById("inpt") ;
let ul = document.getElementById("ul_el") ;
let deleteb = document.getElementById("DELETE") ;

LeadfromLocal = JSON.parse( localStorage.getItem("myLeads"));
if (LeadfromLocal)
{
    mylinks = LeadfromLocal ;
    render(mylinks);
}


buttonSave.addEventListener("click" , function ()
{
    mylinks.push(link.value) ;
    link.innerText = "";
    render(mylinks);

})


deleteb.addEventListener("click" , function ()
{
    mylinks= [] ;
    localStorage.clear() ;
    render(mylinks);

})
function render (links) {
    let ietem = "" ;

    for (let i = 0; i < links.length; i++)
    {
        ietem +=
           ` <li>
                <a href="${links[i]}">
                
                    ${links[i]}
                </a>
            </li>` ;



    }
    ul.innerHTML =    ietem ;
}


TabSave.addEventListener("click" , function ()
{

chrome.tabs.query({active: true , currentWindow : true} , function (tabs)
{
    localStorage.setItem("myLeads" , JSON.stringify(mylinks));
    mylinks.push(tabs[0].url) ;
    render(mylinks);

});
});