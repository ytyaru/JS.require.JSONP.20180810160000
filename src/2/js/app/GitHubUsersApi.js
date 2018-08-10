// https://developer.github.com/v3/users/#get-a-single-user
// https://blog.bati11.info/entry/2013/12/17/121745
//require(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
//define(["js/lib/require/require.min", "https://api.github.com/users/" + "ytyaru" + "?callback=define"],
define(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
    /*
    function (data) {
        console.log(data);
        this._data = data;
        console.log(this);
    }
    */
//    (require, data) => {
    (data) => {
        console.log(this);
        console.log(data);
        //this._data = data;
        alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);
        /*
        const table = document.createElement("table");
        table.setAttribute("id", "UserTable");
        table.appendChild(document.createElement("tbody"));
        document.body.appendChild(table);

        const jsonToHtmlTable = require("js/lib/JsonToHtmlTable/jsonToHtmlTable");
        jsonToHtmlTable.jsonToHtmlTable(document.getElementById('UserTable'), data, ()=>{alert("Finished !!");});
        */
        return data;
    }
    , (err) => {
        console.log("ERROR!!");
        console.log(err);
        return err;
    }
);

