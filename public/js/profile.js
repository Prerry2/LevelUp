// $(document).ready(() => {
//     let un = $('#staticUsername').val().trim()
//     console.log(un)
// })

$(document).ready(() => {

    // click listener works but ajax gets 404
    $(".delete-card").on('click', function () {
        console.log("it clicks")
        var id = $(this).data("id")
        console.log(id)
        $.ajax("/api/cards/delete/" + id, {
            type: "DELETE"
        }).then(
            () => {
                console.log("deleted card", id)
            })
    })

    
})