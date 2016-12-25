(function(iCat){
	iCat.PathConfig();
	iCat.app('Todos', function(){
		return {
			version: '0.0.1'
		};
	});
	
	//lib/jquery/jquery.js
	iCat.include(['lib/zepto/src/zepto.js', './todos.source.js'], null, true);
})(ICAT);