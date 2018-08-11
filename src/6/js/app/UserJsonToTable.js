// https://developer.github.com/v3/users/#get-a-single-user
// https://blog.bati11.info/entry/2013/12/17/121745
define(function(require) {
    return class UserJsonToTable {
        Create(json) {
            console.log("UserJsonToTable.Create()----------");
            const table = document.createElement("table");
            table.setAttribute("id", "UserTable");
            table.appendChild(document.createElement("tbody"));
            document.body.appendChild(table);

            const jsonToHtmlTable = require("js/lib/JsonToHtmlTable/jsonToHtmlTable");
            jsonToHtmlTable(document.getElementById('UserTable'), json, ()=>{alert("Finished !!");});
            console.log(document.getElementById('UserTable'));
        }
    };
});
