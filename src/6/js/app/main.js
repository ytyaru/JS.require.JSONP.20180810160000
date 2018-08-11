define(function(require, exports, module) {
    const submit = document.getElementById('Submit');
    submit.addEventListener(
        'click', 
        ()=>{
            require(["https://api.github.com/users/" + document.getElementById("Username").value + "?callback=define"],
                (data) => {
                    console.log(this);
                    console.log(data);
                    alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);

                    const UserJsonToTable = require('js/app/UserJsonToTable');
                    const table = new UserJsonToTable();
                    table.Create(data);
                }
                , (err) => {
                    console.log("ERROR!!");
                    console.log(err);
                    return err;
                }
            );
        }, 
        false
    );
});
