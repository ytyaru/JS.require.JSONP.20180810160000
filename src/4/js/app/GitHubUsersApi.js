// https://developer.github.com/v3/users/#get-a-single-user
// https://blog.bati11.info/entry/2013/12/17/121745
define(["https://api.github.com/users/" + document.getElementById("Username").value + "?callback=define"],
//define(["https://api.github.com/users/" + document.getElementById("Username").getAttribute("value") + "?callback=define"],
    (data) => {
        console.log(this);
        console.log(data);
        alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);
        return data;
    }
    , (err) => {
        console.log("ERROR!!");
        console.log(err);
        return err;
    }
);
/*
define(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
    (data) => {
        console.log(this);
        console.log(data);
        alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);
        return data;
    }
    , (err) => {
        console.log("ERROR!!");
        console.log(err);
        return err;
    }
);
*/
/*
define(function(require, exports, module) {
    return class GitHubUsersApi {
        constructor(username="ytyaru") { this._username = username; }
        get Username() { return this._username; }
        set Username(v) { if(v) { this._username = v; } }
        Request() {
            require(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
                (data) => {
                    console.log(this);
                    console.log(data);
                    alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);
                    return data;
                }
                , (err) => {
                    console.log("ERROR!!");
                    console.log(err);
                    return err;
                }
            );

        }
    };
});
define(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
    (data) => {
        console.log(this);
        console.log(data);
        alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);
        return data;
    }
    , (err) => {
        console.log("ERROR!!");
        console.log(err);
        return err;
    }
);
*/
