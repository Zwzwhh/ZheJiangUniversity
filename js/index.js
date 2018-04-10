$(function(){//轮播图
	var $bul = $('.banner-ul'),
		$banner = $('#banner'),
		$bli = $('.banner-li'),
		$arrowlf = $('.banner-lf'),
		$arrowrig = $('.banner-rig'),
		timer = null,
		fadenum = 0;

	//向前
	function fadeAdd(){
		$bli.eq(fadenum).fadeOut();//012
		if (fadenum == 2) {
			fadenum=0;
			$bli.eq(fadenum).stop().fadeIn();//0
		}else {
			$bli.eq(fadenum+1).stop().fadeIn();//12
			fadenum++;//
		}
	}
	//向后
	function fadeSubtract(){
		$bli.eq(fadenum).stop().fadeOut();
		if (fadenum <= 0) {
			fadenum=2;
			$bli.eq(fadenum).stop().fadeIn();
		}else {
			$bli.eq(fadenum-1).stop().fadeIn();
			fadenum--;
		}
	}
	//悬停事件
	$banner.hover(function(){clearInterval(timer)},function(){timer = setInterval(fadeAdd,5000)});

	//左箭头
	$arrowlf.click(function(){
		fadeSubtract()
	})
	//右箭头
	$arrowrig.click(function(){
		fadeAdd();
	})

	//初始化
	$bli.eq(fadenum).fadeIn();
	timer = setInterval(fadeAdd,5000);

})