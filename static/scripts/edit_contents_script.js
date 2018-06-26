function edit_markdown(url, type){
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify ({
            markdown_txt: document.getElementById('markdowntext').value,
            type: type
        }),
        success: function(response){
            document.getElementById('markupdiv').innerHTML = response.content;
            if(type == 'post'){
                window.alert('Posted Successully!')
            }

        },
        contentType: "application/json",
        dataType: 'json'
    });
}

