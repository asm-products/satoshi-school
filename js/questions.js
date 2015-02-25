$(document).ready(function()
{    $("#results").click(function() {

    if (!$("input[@name=1q1]:checked").val() ||
        !$("input[@name=1q2]:checked").val() ||
        !$("input[@name=1q3]:checked").val() ||
        !$("input[@name=1q4]:checked").val() ||
        !$("input[@name=1q5]:checked").val() ||
        !$("input[@name=1q6]:checked").val() ||
        !$("input[@name=2q1]:checked").val() ||
        !$("input[@name=2q2]:checked").val() ||
        !$("input[@name=2q3]:checked").val() ||
        !$("input[@name=2q4]:checked").val() ||
        !$("input[@name=2q5]:checked").val() ||
        !$("input[@name=2q6]:checked").val() ||
        !$("input[@name=3q1]:checked").val() ||
        !$("input[@name=3q2]:checked").val() ||
        !$("input[@name=3q3]:checked").val() ||
        !$("input[@name=3q4]:checked").val() ||
        !$("input[@name=3q5]:checked").val() ||
        !$("input[@name=3q6]:checked").val()
    ) {
        alert("You're not done yet!");
    }

    else {
        var cat1name = "1";
        var cat2name = "2";
        var cat3name = "3";
        var cat4name = "4";
        var cat5name = "5";
        var cat6name = "None";


        var cat1 = ($("input[@name=1q1]:checked").val() != "a");

        var cat2 = ($("input[@name=1q2]:checked").val() != "b");

        var cat3 = ($("input[@name=1q3]:checked").val() != "c");

        var cat4 = ($("input[@name=1q4]:checked").val() != "d");

        var cat5 = ($("input[@name=1q5]:checked").val() != "a");

        var cat6 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5); var categories = [];

        if (cat1) { categories.push(cat1name) };
        if (cat2) { categories.push(cat2name) };
        if (cat3) { categories.push(cat3name) };
        if (cat4) { categories.push(cat4name) };
        if (cat5) { categories.push(cat5name) };
        if (cat6) { categories.push(cat6name) };

        var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';
        $("#categorylist").text(catStr);
        $("#categorylist").show("slow");

        if (cat1) { $("#1category1").show("slow"); };
        if (cat2) { $("#1category2").show("slow"); };
        if (cat3) { $("#1category3").show("slow"); };
        if (cat4) { $("#1category4").show("slow"); };
        if (cat5) { $("#1category5").show("slow"); };
        if (cat6) { $("#1category6").show("slow"); };
        if (cat7) { $("#2category1").show("slow"); };
        if (cat8) { $("#2category2").show("slow"); };
        if (cat9) { $("#2category3").show("slow"); };
        if (cat10) { $("#2category4").show("slow"); };
        if (cat11) { $("#2category5").show("slow"); };
        if (cat12) { $("#2category6").show("slow"); };
        if (cat13) { $("#3category1").show("slow"); };
        if (cat14) { $("#3category2").show("slow"); };
        if (cat15) { $("#3category3").show("slow"); };
        if (cat16) { $("#3category4").show("slow"); };
        if (cat17) { $("#3category5").show("slow"); };
        if (cat18) { $("#3category6").show("slow"); };

        { $("#closing").show("slow"); };
    }
});});
