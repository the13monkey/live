jQuery(document).ready(function(){

    $("video").click(function(){

        var srcTarget = $(this).find("source").attr("src");
        var labelTarget = $(this).parent().prev().html(); 
        var srcOriginal = $("#control-video").find("source").attr("src");
        var labelOriginal = $("#control-video").prev().html();

        $(this).find("source").attr("src", srcOriginal);
        $(this).parent().prev().html(labelOriginal);
        $("#control-video").find("source").attr("src", srcTarget);
        $("#container-control").find("label").html(labelTarget);
        
    });

});

