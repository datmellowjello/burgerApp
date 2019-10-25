$("#newBurgerBtn").click((e)=>{
    e.preventDefault();
    $.ajax({
        url:"/api/insertOne",
        type:'post',
        data: $('#newBurger').serialize(),

    }).then((data)=>{
        location.reload();
    });
});

$(".eat").click((e)=>{
    let id = e.currentTarget.attributes["data-id"].value;
    console.log(id)
    $.ajax({
        url:"/api/updateTrue",
        type:'put',
        data: {id:id},
    }).then((data)=>{
        location.reload();
    });
})

$(".make").click((e)=>{
    let id = e.currentTarget.attributes["data-id"].value;
    $.ajax({
        url:"/api/updateFalse",
        type:'put',
        data: {id:id},
    }).then((data)=>{
        location.reload();
    });
})