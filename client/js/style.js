// width to middle section
$('.workout-ground-link').click(function() {
    $('.preview-section').toggle()
    $('.preview-section').empty()
    console.log()
    $('.preview-section').append($(this).find(".workout-img")[0])
});