const fetchFurniturePrice = function() {
    let input = $('#furniture-input').val()
    $.get(`/buy/${input}`, function(data) {
        
        $("body").append(`<div> 
        Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.
 </div>`) } )
   
}