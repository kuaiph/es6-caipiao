import $ from 'jquery'; //简单便捷 事件绑定 服务端通信 ajax请求
class Interface{
	/**
	 * [getOmit 获取遗漏数据]
	 * @param  {[string]} issue [当前期号]
	 * @return {[type]}       [description]
	 */
	getOmit(issue){
		let self = this;//涉及闭包 要保留对this的引用
		return new Promise((resolve,reject)=>{//传统方式使用回调
			$.ajax({
				url:'/get/omit',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					self.setOmit(res.data); //setOmit是其他类中方法
					resolve.call(self,res);
				},
				error:function(err){
					reject.call(err);
				}
			})
		});
	}
	/**
	 * [getOpenCode 获取开奖号码]
	 * @param  {[string]} issue [当前期号]
	 * @return {[type]}       [description]
	 */
	getOpenCode(issue){
		let self = this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/opencode',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					self.setOpenCode(res.data);
					resolve.call(self,res);
				},
				error:function(err){
					reject.call(err);
				}
			})
		});
	}
	/**
	 * [getState 获取销售状态]
	 * @param  {[string]} issue [当前期号]
	 * @return {[type]}       [description]
	 */
	getState(issue){
		let self = this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/state',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function(res){
					resolve.call(self,res);
				},
				error:function(err){
					reject.call(err);
				}
			})
		});
	}
}

export default Interface;