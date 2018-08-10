// https://developer.github.com/v3/users/#get-a-single-user
require(["https://api.github.com/users/" + "ytyaru" + "?callback=define"],
    /*
    function (data) {
        console.log(data);
        this._data = data;
        console.log(this);
    }
    */
    (data) => {
        console.log(this);
        console.log(data);
        this._data = data;
        alert("ユーザlogin名: " + data.data.login + "\n" + "リポジトリ数: " + data.data.public_repos);
    }
);

