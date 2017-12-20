// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

// 生成表格函数
function makeGrid(num1,num2) {
    for(let i = 0; i<num1;i++){
        var row = $("<tr></tr>");
        row.appendTo("table");
        for(let j = 0; j<num2;j++){
            var col = $("<td></td>");
            row.append(col);
        }
    }
}

// 用来判断单元格是否已填色
let sta =1;
// 提交按钮单击事件
$("input[type=submit]").click(function(){
    const rowNum = $("#input_height").val();
    const colNum = $("#input_width").val();
    //判断单元格是否要清除颜色
    if(sta == 2 || (rowNum == $("#input_height").val() && colNum == $("#input_width").val())){
        $("table").empty();
        sta = 1;
    }
    makeGrid(rowNum,colNum);
})

// 拾色器获取色值
// 设置默认值
let color="#000";
$("#colorPicker").on("change",function(){
    color = $("#colorPicker").val();
})

// 单元格点击事件
$("table").on("click","td",function(e){
    var $this =$(this);
    $this.css("background-color",color);
    // 单元格填色后，将sta赋值为2
    sta = 2;
})
