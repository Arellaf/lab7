$(function() {
    $("#slider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function(event, ui) {
            $("#slider-value").text(ui.value);
        }
    });

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
    });

    $(".gallery img").click(function() {
        const src = $(this).attr("src");
        $("#dialog-img").attr("src", src);
        $("#dialog").dialog("open");
    });


    $("#tabs").tabs();

    $("#send-btn").click(function() {
        alert("Дякуємо за повідомлення, " + $("#name").val() + "!");
    });

    $("#menu li a").hover(
        function() {
            $(this).stop().animate({ backgroundColor: "#1a2633", color: "#fff" }, 200);
        },
        function() {
            $(this).stop().animate({ backgroundColor: "#fff", color: "#222" }, 200);
        }
    );
});
