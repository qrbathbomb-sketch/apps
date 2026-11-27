(function(){
  var ua=navigator.userAgent||'';
  var inApp=/TikTok|musical_ly|Bytedance|Instagram|FBAN|FBAV|Line\/|Twitter/i.test(ua);
  var ios=/iPhone|iPad|iPod/.test(ua);
  document.querySelectorAll('[data-inapp]').forEach(function(el){el.hidden=!inApp});
  document.querySelectorAll('[data-ios-only]').forEach(function(el){el.hidden=!ios});
  var copy=document.getElementById('copy');
  if(copy)copy.addEventListener('click',function(){
    var t=location.href;
    (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){copy.textContent='コピーしました'},function(){prompt('このURLをコピーしてください',t)});
  });
})();
