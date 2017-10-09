{
	let obj = {
		time: '2017-10-09',
		name: 'net',
		_r: 123
	};
	let monitor = new Proxy(obj, {
		get(target, key){
			return target[key].replace('2017','2018');
		},
		set(target,key,value){
	    if(key==='name'){
	      return target[key] = value;
	    }
	    else{
	      return target[key];
	    }
	  },
	  has(target,key){
	    if(key==='name'){
	      return target[key];
	    }
	    else{
	      return false;
	    }
	  },
	  deleteProperty(target,key){
	    if(key.indexOf('_')>-1){
	      delete target[key];
	      return true;
	    }
	    else{
	      return target[key];
	    }
	  },
	  ownKeys(target){
	    return Object.keys(target).filter(item => item != 'time');
	  }
	});
	
}
 
{
	function validator(target,validator){
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy);
					}else{
						throw Error(`不能设置${key}到${value}`);
					}
				}else{
					throw Error(`${key} 不存在`);
				}
			}
		});
	}

	const personValidators = {
		name(val){
			return typeof val === 'string';
		},
		age(val){
			return typeof val === 'number' && val>18;
		}
	}

	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValidators);//返回的是一个实例的代理
		}
	}

	const person = new Person('Nero',23);
	console.log(person);
	person.name = 'Yashen';
	console.log(person);
}