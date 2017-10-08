import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
	if(!args.watch) return cb();//不是监听下就返回回调函数

	var server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();//启动服务器

	//热更新
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
		server.notify.apply(server,[file]);
	});

	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
		server.start.bind(server)();
	});
})