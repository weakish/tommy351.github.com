(function($){
  // Caption
  $('.entry').each(function(i){
    $(this).find('img').each(function(){
      var alt = this.alt;

      if (alt){
        $(this).after('<span class="caption">' + alt + '</span>');
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
    });
  });

  // Gallery
  var play = function(parent, item, callback){
    var width = parent.width();

    item.load(function(){
      var nWidth = this.naturalWidth,
        nHeight = this.naturalHeight;

      callback();
      $(this).animate({opacity: 1}, 500);
      parent.animate({height: width * nHeight / nWidth}, 500);
    });
  };

  $('.gallery').each(function(){
    var $this = $(this),
      current = 0,
      photoset = $this.children('.photoset').children(),
      all = photoset.length;

    play($this, photoset.eq(0), function(){
      /*
      $this.on('click', '.prev', function(){
        var next = (current - 1) % all;
        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          current = next;
        });
      }).on('click', '.next', function(){
        var next = (current + 1) % all;
        play($this, photoset.eq(next), function(){
          photoset.eq(current).animate({opacity: 0}, 500);
          current = next;
        });
      });*/
    });
    

    /*
    async.forEach(photoset, function(item, next){
      $(item).load(function(){
        arr.push([this.naturalWidth, this.naturalHeight]);
        next();
      });
    }, function(){
      $this.css('height', width * arr[0][1] / arr[0][0]);
    });*/
  });
})(jQuery);