
//   let promiseWord =  $.get('/randomWord')
//    promiseWord.then(function(word){
      
//     $.get(`/randomWord/:${word}`, function(data){
//         console.log(data.items[0].volumeInfo.title);
//         return data.items[0].volumeInfo.title
//     })
//    })


  // P7m3Oz1ntTBOn3oKUoEH7RLdGEHpmGWa

  $.get('/randomWord').then(function (word) {
    const bookArr = $.get(`/book/${word}`);
    const gifArr =  $.get(`/gif/${word}`);
    Promise.all([bookArr, gifArr]).then(function(result) {
        console.log(result);
        const book = $(`<h1>${result[0].items[0].volumeInfo.title}</h1>`);
        const gif = $(`<img src = ${result[1].data[0].images.original.url}/>`);
        $('body').append(book);
        $('body').append(gif);
    })
})