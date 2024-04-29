$(".circ").click(function () {
    $(".shape").addClass("circle")
    $(".shape").removeClass("triangle")
    $(".shape").removeClass("rectangle")
})
$(".square").click(function () {
    $(".shape").removeClass("circle")
    $(".shape").removeClass("triangle")
    $(".shape").removeClass("rectangle")
})
$(".tria").click(function () {
    $(".shape").addClass("triangle")
    $(".shape").removeClass("circle")
    $(".shape").removeClass("rectangle")
})
$(".rect").click(function () {
    $(".shape").addClass("rectangle")
    $(".shape").removeClass("circle")
    $(".shape").removeClass("triangle")

})
$(".inputcolor").change(function () {
    let color = $(this).val()
    $(".shape").css("background-color", color)
    $(".shape.triangle").css({
        "background-color": "transparent",
        "border-bottom-color": color,
        "border-right-color": color,
        "border-left-color": color
    })
})

