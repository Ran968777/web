// JavaScript Document
$(function () {
	//更多页获取标题
	$(".wrapper-more .moreList .module-title").html($(".moreList .module-body div[class^='nsy']").data('nsyname'));

	// tab切换
	$(".tabs li").hover(function () {
		var _this = $(this),
			s = _this.index(),
			$pane = _this.parents('.module').find('.tab-pane').eq(s);
		a_s_r(_this, 'current');
		a_s_r($pane, 'current');
	});
	$(".subtabs li").hover(function () {
		var _this = $(this),
			s = _this.index(),
			$pane = _this.parents('.module').find('.subtab-pane').eq(s);
		a_s_r(_this, 'current');
		a_s_r($pane, 'current');
	});
	$(".subtabs02 li").hover(function () {
		var _this = $(this),
			s = _this.index(),
			$pane = _this.parents('.module').find('.subtab-pane02').eq(s);
		a_s_r(_this, 'current');
		a_s_r($pane, 'current');
	});
	$(".subtabs03 li").hover(function () {
		var _this = $(this),
			s = _this.index(),
			$pane = _this.parents('.module').find('.subtab-pane03').eq(s);
		a_s_r(_this, 'current');
		a_s_r($pane, 'current');
	});
	$(".subtabs04 li").hover(function () {
		var _this = $(this),
			s = _this.index(),
			$pane = _this.parents('.module').find('.subtab-pane04').eq(s);
		a_s_r(_this, 'current');
		a_s_r($pane, 'current');
	});
	//阻止更多页、新闻页导航点击事件
	$(".breadcrumb a").click(function () {
		return false;
	});
	//----------
	//多级菜单
	$('.js-nav li').hover(function () {
		$(this).find('.subNav').stop().slideDown();
	}, function () {
		$(this).find('.subNav').stop().slideUp();
	});
	//菜单选中
	var id = window.location.search.split("menuId=")[1];
	a_s_r($('.sideNav a[href$="\=' + id + '"]').parent(), 'active');
	a_s_r($('.nav>li>a[href$="\=' + id + '"]').parent(), 'active');
	a_s_r($('.nav>li>a[href$="\=' + id + '"]'), 'active');
	//----------

	//首页大图轮播
	var $img = $('#slides li'),
		$box = $('.banner');
	count = $img.length;
	var li = '';
	for (var i = 1; i <= count; i++) {
		li += '<a>' + i + '</a>';
	}
	$box.append('<span id="num">' + li + '</span>');
	var $num = $('#num a');
	$num.first().addClass('cur');
	$num.click(function () {
		var i = $(this).text() - 1;
		n = i;
		if (i >= count) return;
		$img.filter(':visible').fadeOut(500).parent().children().eq(i).fadeIn(1000);
		a_s_r($(this), 'cur');
	});
	t = setInterval('showAuto()', 10000);
	$box.hover(function () {
		clearInterval(t);
	}, function () {
		t = setInterval('showAuto()', 10000);
	});
	//----------

	//显示时间
	setInterval("$('.time').html(curTime);", 1000);

	//平台资讯新闻列表增加序号
	$(".ptzx .nsy-news-ul li").each(function (n) {
		var _span = '<span class="nsy-news-order">0' + (n + 1) + '</span>';
		$(this).prepend(_span);
	});
})
/*-------------自定义函数-------------------------*/
function a_s_r(o,c){
	o.addClass(c).siblings().removeClass(c);
}
//显示当前年月日 时分秒
function curTime(){
    var d = new Date(),
		year =d.getFullYear(),
		month = d.getMonth()+1,
	    date=d.getDate(),
    	h = d.getHours(),
		m = d.getMinutes(),
		s = d.getSeconds(),
		ww= "星期" + "日一二三四五六".charAt(d.getDay());
	return year + "年" + o(month) + "月" + o(date) +'日&nbsp;'+ww;
}

//小于10补0
function o(x){
	return x<10?'0'+x:x;
}
function showAuto(){
    n = n >= (count-1) ? 0 : ++n;
    $("#num a").eq(n).trigger('click');
}
