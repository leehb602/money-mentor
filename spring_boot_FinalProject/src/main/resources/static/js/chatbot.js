/**
 * chatbot.js
 */
 
 $(document).ready(function(){
    // 웰컴 메시지 받기위해 message 입력 받기 전에
    // 빈 값으로 서버에 전송하고 결과 받음
    callAjax();
    message.focus();
    
    $('#chatbotForm').on('submit', function(){
        //폼이 submit 되지 않도록 기본 기능 중단
       event.preventDefault();
       
       // message가 빈값인 경우 확인메시지 출력
       if($("#message").val() == "") {
          alert("질문을 입력하세요.");
          $("#message").focus();
          return false;
       }
       
       // 챗봇 창에 보낸 메시지 추가
       $("#chatBox").append("<div class='msgBox send'><div id='question'><div class='QAq'>Q</div><span>" + 
                       $("#message").val() + "</span></div></div>");
       
       callAjax();
       
       $("#message").val(""); // 입력란 비우기
    });// submit 종료
    
    function callAjax() {
       // 서버에 전송하고 결과 받아서 처리
       $.ajax({
          type:"post",
          url:"chatbot",
          data: {"message" : $("#message").val()},
          dataType : 'json',
          success:function(result){
             //JSON 형식 그대로 반환 받음
				var bubbles = result.bubbles;
				for(var b in bubbles){
					if(bubbles[b].type == 'text'){ // 기본 답변인 경우
						/* chatBox에 받은 메시지 추가 */
							$('#chatBox').append('<div class="msgBox receive"><div id="in"><div class="QAa">A</div><span>' + 
															   bubbles[b].data.description +'</span></div></div>'); 
															   
																   
					}	
					else if(bubbles[b].type == 'template'){//이미지 답변 또는 멀티링크 답변 시작
						if(bubbles[b].data.cover.type=="image"){//이미지 이면
							$("#chatBox").append("<img src='" + bubbles[b].data.cover.data.imageUrl +
																		 "' alt='이미지 없음' width='200' height='150'>");
							if(bubbles[b].data.contentTable == null){
								$("#chatBox").append
								("<a href='"+bubbles[b].data.cover.data.action.data.url+"' target='_blank'>" + 
										bubbles[b].data.cover.data.action.data.url+ "</a>");							
							} else {
								$("#chatBox").append("<div class='msgBox receive'><div id='in'><div class='QAa'>A</div><span>" + bubbles[b].data.cover.data.description+ "</span></div></div>");	
																
							}
						} 	
						else if(bubbles[b].data.cover.type=="text"){//멀티링크 답변이면
							$("#chatBox").append("<div class='msgBox receive'><div id='in'><div class='QAa'>A</div><span>" + bubbles[b].data.cover.data.description+ "</span></div></div>");
							
						}
						
						// 이미지 / 멀티링크 답변 공통 (contentTable 포함)
						for(var ct in bubbles[b].data.contentTable){
							var ct_data = bubbles[ct].data.contentTable[ct];
							for(var ct_d in ct_data){
								$("#chatBox").append
								("<div class='link_div'><a class='link_a' href='"+ct_data[ct_d].data.data.action.data.url+"' target='_blank'>여기로 이동해주세요</a><div>");
						    }
					    }// contentTable for문 끝
				    }//template 끝			
				}//bubbles for문 종료
				
				// 스크롤해서 올리기										   
				$("#chatBox").scrollTop($("#chatBox").prop("scrollHeight"));
          },
          error:function(){
             alert("실패");
          }
       }); // ajax 종료
       
    }

    // 윈도우 끄는기능 
    
   
});