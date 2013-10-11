var dashLog;
;(function($){
	$(document).ready(function(){
		dashLog = new DashLog();

	});

	function DashLog(){
		this.fetchLog();
		setInterval(this.fetchLog, 500);
	}

	DashLog.prototype.fetchLog = function(){
		$.post('/Applications/MAMP/logs/php_error.log', function(response){
			$('.output pre').html(response);
		});
	};


})(jQuery);