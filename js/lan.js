let lan=(()=>{
	let lans={
		'zh':{
			'double_enter_send':'双击回车发送消息',
			'roll_dice':'[掷骰]',
			'cmd_error':'指令错误',
			'change_name':'更改姓名为'
		}
	}
	
	let ret=lans['zh'];
	
	let paramsStr = window.location.search
	let params = new URLSearchParams(paramsStr)
	let lp=params.get('lan');
	ret=lans[lp];
	if(ret==undefined){
		ret=lans['zh'];
	}

	return ret;
})();