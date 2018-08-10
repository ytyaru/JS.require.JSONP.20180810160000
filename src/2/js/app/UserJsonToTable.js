// https://developer.github.com/v3/users/#get-a-single-user
// https://blog.bati11.info/entry/2013/12/17/121745
//require(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
define(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
define(){
    return class UserJsonToTable {
        // https://github.com/c-cho/JsonToHtmlTable
        ToTable(json) {
            let html = "<table>";
            "<tr>"
            "<th>"
            "<td>"
            "</tr>"
            html += "</table>"
            return html;
        }
        _ToTr() {
        }
    };
);

