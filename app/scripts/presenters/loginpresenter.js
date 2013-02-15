define(['views/loginview'], function(view) {

    var presenter = function () {};


    presenter.prototype.init = function() {
        var loginview = new view(this);
        loginview.render();
    };

    presenter.prototype.login = function (userbarcode,tubebarcode) {
        console.log("try to login with : "+ userbarcode)

        if (userbarcode === "123" ) {
            var loginview = new view (this);
            loginview.render();
        } else {
            var data = {error:"Unknown user"};
            var loginview = new view (this);
            loginview.render(data);
        }

    };

    return presenter;
});
