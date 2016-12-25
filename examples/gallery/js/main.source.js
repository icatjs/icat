(function(iCat){
	iCat.app('Gallery', function(){
		iCat.PathConfig();
		return {
			version: '1.0'
		}
	});

	iCat.use('zAjaxAnim', function(){
		iCat.include('./mvc.source.js');
	});
})(ICAT);