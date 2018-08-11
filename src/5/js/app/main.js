define(function(require, exports, module) {
    const $ = require("jquery");
    $("#Submit").on("click", function(){
        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/" + $("#Username").val(),
//            url: "https://api.github.com/users/" + document.getElementById("Username").value, // OK
            timeout: 10000,
            cache: false,
        })
        .done(function (response, textStatus, jqXHR) {
            console.log(response);
            if (response.status === "err") { alert("err: " + response.msg); }
            const UserJsonToTable = require('js/app/UserJsonToTable');
            const table = new UserJsonToTable();
            table.Create(response);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            alert("$.ajax() failed ...");
        })
        .always(function (data_or_jqXHR, textStatus, jqXHR_or_errorThrown) {
            console.log("ajax() finished.");
        });
    });
});
