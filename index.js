'use strict';


hexo.extend.tag.register('twitter', function(args, content){

	var postId     = "";
	var userId     = "";
	var returnHTML = "";
	var regexp = /https:\/\/(?:twitter|x)\.com\/([a-zA-Z0-9_]+)\/status\/([0-9]+)/;

  	if(args[0] && args[0].match(regexp)){

	  	var matchURL = args[0].match(regexp);
	  	postId = matchURL[2];
	  	userId = matchURL[1];

  	}else if(args[0] && args[0].match(/[0-9]+/)){

		postId = args[0];
		userId  = args[1] || (hexo.config.tagTwitter && hexo.config.tagTwitter.id ? hexo.config.tagTwitter.id : "" );
  	}

  	if(postId != "" && userId != ""){
  		returnHTML = '<div class="twitter-wrapper"><blockquote class="twitter-tweet"><a href="https://twitter.com/'+ userId +'/status/' + postId + '"></a></blockquote></div><script async defer src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  	}
  	return returnHTML;
},{
  async: true,
  ends: false
});
