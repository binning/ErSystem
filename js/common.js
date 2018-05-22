// 点击发送手机验证码
var Countdown = 30;
var sendMessage = {
	getNum: function (e) {
		if (Countdown == 0) {
			$('.get-code').css("background", "#0099ff");
			$('.get-code').attr("disabled", false);
			$('.get-code').text("获取验证码");
			Countdown = 30;
			return;
		} else {
			Countdown = Countdown<10?"0"+Countdown:Countdown;
			$('.get-code').css("background", "#ccc");
			$('.get-code').attr("disabled", true);
			$('.get-code').text("(" + Countdown + "s) 重新发送");
			Countdown--;
		}
		setTimeout(function () {
			sendMessage.getNum()
		}, 1000)
	}
};
$(function () {	
	// 点击出现弹框
	$('.foot-box').find('.show-modal').click(function (e) {
		e.preventDefault();
		$('.modal-mask').toggle();
	});	
})
