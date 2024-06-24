$(function(){
    $(window).on('scroll',function(){ //this개념 조심하기. =>는 this를 못쓴다. 
        let scrpos=$(this).scrollTop();
        if(scrpos > 80){ //스크롤이 아래로
            $("#hd").addClass('scroll')
        }else{
            $("#hd").removeClass('scroll')
        }
    })
})