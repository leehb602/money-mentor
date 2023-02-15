/**
 *  questionDelete.js
 */

$(document).ready(function(){
    $('#qus_btn_delete').on('click', function(){
        var answer = confirm("삭제하시겠습니까?");
        if(answer){ //if start
        var deleteNum = $(".qusNum").val(); 
            alert(deleteNum);
        $.ajax({ //ajax start
            type:'post',
            url:"/deleteQuestion",
            data:{"deleteNum":deleteNum},
            sucess:function(result){
                if(result == 1){	 					
                    location.href="/all/serviceCenter";
                }
            },
            error:function(){
                alert("실패");
            }

        }); //ajax end


       }//if end
    })

    $('#qus_btn_update').on('click', function(){
        var answer = confirm("수정하시겠습니까?");
    })
});