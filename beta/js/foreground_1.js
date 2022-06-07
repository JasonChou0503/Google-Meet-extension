console.log(`>>> foreground_1 online`);

function enter_class_code(num){
    var btn = document.querySelector("#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc > div.Ez8Iud > div > div.KOM0mb > div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button")
    var input = document.querySelector("#i6") // 反覆focus、unfocus讓button出現

    input.value = ''

    setTimeout(function(){ // 等待loading

        input.value = String(num) // 輸入參數

        btn.setAttribute('aria-hidden', 'false');
        btn.style.display = 'inline-flex';
        btn.disabled = false

        setTimeout(function(){ // 等待loading

            document.querySelector("#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc > div.Ez8Iud > div > div > div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button > span").click() // 按下加入
        
        }, 1000)
        
    }, 500)
}

var code = [
    ["045" , "079" , "063" , "063" , "" , "045" , "003" , "129"],
    ["146" , "079" , "088" , "045" , "182" , "182" , "003" , "003"],
    ["045" , "198" , "003" , "079" , "003" , "003" , "129" , "146"],
    ["129" , "146" , "045" , "146" , "003" , "003" , "088" , "079"],
    ["123" , "123" , "129" , "003" , "079" , "198" , "" , "045"]
]

var start_time = ["08:10" , "09:10" , "10:10" , "11:10" , "13:00" , "14:00" , "15:05" , "16:05"]

setInterval(function(){
    console.log(`偵測時間......`)
    let date = new Date
    var day = parseInt(date.getDay())
    var time = date.toTimeString().slice(0, 5) // HH:MM
    for (var i = 0 ; i < start_time.length ; i++){
        if (start_time[i] == time){   
            console.log(`時間到 ${start_time[i]}`)
            enter_class_code(code[(day - 1)][i])
        }
    }
} , 5000)