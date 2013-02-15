define([], function () {

    function login_click(owner) {
        return function () {
            if (owner) {
                var userbarcode = $("#user_barcode").val();
                var tube_barcode = $("#tube_barcode").val();

                owner.login(userbarcode, tube_barcode);
            }
        }
    }


    var loginview = function (owner) {
        this.owner = owner;
    };

    loginview.prototype.render = function (data) {


        console.log("render");
        console.log(data);

        var contentAsString = "<div>"
            + "<div class='span3'>Enter your barcode. Now.<div><input id='user_barcode' value='123'></div></div>"
            + "<div class='span3'>And the tube barcode!<div><input id='tube_barcode' value='456'></div></div>"
            + "<button id='login_button'>Let\'s go</button>";

        if (data) {
            contentAsString += "<div>error : "+data.error+"</div>";
        }
        contentAsString += "</div>";

        $("#content").empty().append( contentAsString );

        $("#login_button").click(login_click(this.owner));
    };

    return loginview;
});
