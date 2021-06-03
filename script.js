$("#submitButton").on("click", function (){
    console.log("submit");
    $("#comments").prepend(`<div id="input">
                                <img src="Unknown-2.jpg">
                                <div class="text">
                                    <div class="row1">
                                        <p id="user">${$("#name").val()}</p>
                                        <div id="controls">
                                            <p id="edit">Edit</p>
                                            <p id="delete">Delete</p>
                                        </div>
                                    </div>
                                    <div>
                                    <p class="userComment">${$("#comment").val()}</p>
                                    </div>
                                </div>
                            </div>`)
});


$("#comments").on("click", "#edit", function(){
    console.log("edit");
    let parents = $(this).parents()[1];
    let next = $(parents).next()
   $(next).append(`<input type="text" id="commentEdit">
   <span id="resubmitButton">Submit</span>`);
   let editFill = $(next).children()[0]
   let commentEdit = $(next).children()[1]
   $(commentEdit).val(`${$(editFill).text()}`)
   console.log(editFill)
});

$("#comments").on("click", "#resubmitButton", function(){
    console.log("resubmit");
    let edit = $(this).prev()
    let comment = $(this).prev().prev()
    console.log(edit)
    $(comment).text(`${$(edit).val()}`);
    let previous = $(this).prev()
    console.log(previous)
    this.remove()
    $(previous).remove();
});

$("#comments").on("click", "#delete", function(){
    console.log("delete");
   let parent = $(this).parents()[3];
   $(parent).remove();
});

