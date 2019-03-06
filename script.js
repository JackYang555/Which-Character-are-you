$("button").click(function() {
    var age = $(".age").val();
    var agro = $(".Answer").val();
    if (age >= 18 && agro === "No") {
        $(".message").text("You Are Master Shifu, Always Calm and Collected !");
        $(".Shifu").show();
        $(".shen").hide();
        $(".Tiger").hide();
        $(".Panda").hide();
    } else if (age >= 18 && agro === "Yes") {
        $(".message").text("You are Lord Shen, A very scary Animal.");
        $(".shen").show();
        $(".Tiger").hide();
        $(".Panda").hide();
        $(".Shifu").hide();
    } else if (age < 18 && agro === "Yes") {
        $(".message").text("You are Tigress, Always angry when things dont get done. ");
        $(".Tiger").show();
        $(".shen").hide();
        $(".Panda").hide();
        $(".Shifu").hide();
    } else if (age < 18 && agro === "No") {
        $(".message").text("Yor are Po, kind and Friendly");
        $(".Panda").show();
        $(".Shifu").hide();
        $(".shen").hide();
        $(".Tiger").hide();
    } else if (typeof age === "number" && (agro !== "Yes" || agro !== "No")) {
        $(".message").text("Please Capitalize Your first letter!");
    } else {
        $(".message").text("Please restart!");
    }
});