const $cal_btnEl = document.getElementById("cal_btn")

$cal_btnEl.addEventListener("click", function(){
    const $time_inputEl = document.getElementById("time_input")
    const $what_inputEl = document.getElementById("what_input")
    if(parseInt($time_inputEl.value) >= 13 || parseInt($time_inputEl.value) <= 0 && $time_inputEl.value != ""){
        alert("1~12 사이의 숫자를 입력해 주세요")
    }
    else if($what_inputEl.value === "" || $time_inputEl.value === ""){
        alert("전부 입력해 주세요!")
    }
    else{
        let $whatEl = document.querySelector(".what")
        $whatEl.textContent = $what_inputEl.value
    
        let $timeEl = document.querySelector(".time")
        $timeEl.textContent = Math.ceil(10000 / parseInt($time_inputEl.value))

        let innerwidth = window.innerWidth
        if(innerwidth>=900){
            document.querySelector(".result_area").style.display = "block"
            document.querySelector(".go").style.display = "inline-block"
            document.querySelector(".share").style.display = "inline-block"
            document.querySelector(".btn").style.margin = "88px 0 147px 0"
            document.querySelector(".logo").style.margin = "130px 0 20px 0"
            // $time_inputEl.setAttribute('disabled', "true")
            // $what_inputEl.setAttribute('disabled', "true")  
        }
        else{
            document.querySelector(".result_area").style.display = "block"
            document.querySelector(".go").style.display = "inline-block"
            document.querySelector(".share").style.display = "inline-block"
            document.querySelector(".btn").style.margin = "32px 0 64px 0"
        }
    }
})

const $go_btnEl = document.getElementById("go_btn")

$go_btnEl.addEventListener("click", function(){
    document.querySelector(".modal").style.display = "block"
})

const $close_btnEl = document.getElementById("close_btn")

$close_btnEl.addEventListener("click", function(){
    document.querySelector(".modal").style.display = "none"
})

const $share_btnEl = document.getElementById("share_btn")

$share_btnEl.addEventListener("click", function(){
    try{
        navigator.clipboard.writeText(window.location.href)
        alert('URL이 복사되었습니다.')
    }catch(error){
        alert('URL 복사에 실패했습니다.')
    }
})
