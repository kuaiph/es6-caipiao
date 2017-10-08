const args = require('yargs')
	//区分开发环境或者线上环境
	.option('production', {
		boolean: true,
		default: false,
		describe: 'min all scripts'
	})
	//设置要不要自动编译
	.option('watch', {
		boolean: true,
		default: false,
		describe: 'watch all files'
	})
	//设置是否需要输出编译日志
	.option('verbose', {
		boolean: true,
		default: false,
		describe: 'log'
	})
	//处理压缩的
	.option('sourcemaps', {
		describe: 'force the creation of sourcemaps'
	})
	//设置服务的端口
	.option('port', {
		string: true,
		default: 8080,
		describe: 'server port'
	})
	//表示命令行输入的上述内容以字符串进行解析
	.argv;
	
export default args;