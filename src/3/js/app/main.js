define(function(require, exports, module) {
    const json = require('js/app/GitHubUsersApi');
    console.log("MAIN");
    console.log(json);
    const UserJsonToTable = require('js/app/UserJsonToTable');
    const table = new UserJsonToTable();
    table.Create(json);
});
