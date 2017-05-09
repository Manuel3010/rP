/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var babelify= require('babelify');
var browserify= require('browserify');
var webserver = require('gulp-webserver');
var source = require('vinyl-source-stream');


gulp.task('server', function(){
    
    gulp.src('./public_html')
            .pipe(webserver({
                host: '0.0.0.0',
                port: '9000',
                fallback: 'index.html'
                
            }));    
});
gulp.task('build', function(){ 
        
   browserify({
       entries: './src/index.jsx',
       
       extensions: '.jsx',
       debug: true        
   })     
           .transform("babelify", {presets: ["es2015", "react"]}) 
          
           .bundle()
           .pipe(source('bundle.js'))
           .pipe(gulp.dest('./public_html/js'));
     
        
        
});

gulp.task('default', function () {
    // place code for your default task here
});
