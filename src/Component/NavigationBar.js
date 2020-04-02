import React from 'react';
import './NavigationBar.css';
import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css'
const randomstring = require("randomstring");

function NavigationBar() {
    return (
        <div className="NavigationBar">
           {/*<Button onClick={SearchInput} type="Button" className="bp3-button bp3-outlined" >Button</Button>*/}
            <input onClick={SearchInput} className="NavigationBar-SearchInput" name="SearchInput" type="button" value="SearchInput" />
            <input onClick={AddRow} className="NavigationBar-buttonAdd" id="buttonAdd" name="buttonAdd" type="button" value="+" />
            <input className="NavigationBar-text" id="text" name="text" type="test" required placeholder="Вводите текст"/>
        </div>
    );
}
function AddRow() {
    let tbody = document.getElementById("tab").getElementsByTagName("TBODY")[0];
    let row = document.createElement("TR");
    let td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode(randomstring.generate({
        length: 20,
        charset: 'alphabetic'
    })));
    row.appendChild(td1);
    tbody.appendChild(row);
    document.getElementById("text").value = "";
}

function SearchInput() {
        let tab = document.getElementById("tab").rows;
        for (let j = tab.length ; j > 1; j--){
            for (let i = 1; i < j; i++){

                if (tab[i].textContent.indexOf(document.getElementById('text').value) !== -1 &&
                    !(tab[i-1].textContent.indexOf(document.getElementById('text').value) !== -1))
                {
                    let temp1 = tab[i].textContent;
                    tab[i].textContent = tab[i - 1].textContent;
                    tab[i-1].textContent = temp1;
                }
            }
        }

}

export default NavigationBar;