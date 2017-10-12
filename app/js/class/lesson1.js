 
{
	let readonly = function(target,name,descriptor){
		descriptor.writable = false;
		return descriptor;
	}

	class Test{
		@readonly
		time(){
			return '2017-10-10'
		}
	}

	let test = new Test();

	console.log(test.time());
}

{
	let log = (type) => {
		return function(target,name,descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg);
				console.info(`log ${type}`);
			}
		}
	}

	class Advertisement{
		@log('show')
		show(){
			console.info('ad is show')
		}

		@log('click')
		click(){
			console.info('ad is click')
		}
	}

	let ad = new Advertisement();
	ad.show();
	ad.click();
}

