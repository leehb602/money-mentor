/**
 * assetForm.js
 */
 
 $(document).ready(function() {
 	$('#assetForm').on('submit', function() {
		event.preventDefault();
		
		var formData = $(this).serialize();
		var userId = $('#userId').val();
		
		$.ajax({
			type:"post",
			url:"/user/userAssetInsert",
			data:formData,
			success:function(result){
				location.href="/user/assetResultForm/"+userId;
			},
			error:function(){
				alert("오류발생! 관리자에게 문의 바랍니다.");
			}
		});
	});
 });