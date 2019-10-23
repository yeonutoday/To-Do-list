const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector("js-greetings");


const USER_LS="currentUSer" ,
    SHOWING_CN ="showing";

    /*이해안가는데 우선 코드 적고있음>to do에서 렉걸리지않게하기위해*/


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handlesubmit(event){
    /*보통 이벤트가 일어나면 root에서 일어나고 form에서 일어난다.이 event는 마치 거품같은것이다.*/
    event.preventDefault();
    /*input은 많은걸 담을수있다.
    글자를 입력할수도있고 placeholder을 가지게할수도있고 class를 가질수도있고 뭐든할수있음*/
    const currentUSer = input.value;
    /*paingreeting은 text를 필요로함 기억하셈*/
    paintGreeting(currentValue);
    saveName(currentValue);
}    

function askForName(){
    form.classList.add(SHOWING_CN);
    /*이름이 뭐냐?라고 물으면 여누라고 답하고싶다.
    >그리고 엔터를 누르면>이건 form을 제출(submit)했다는걸 의미한다*/
    /*그리고 폼을 서브밋하면 >handlesubmit fuction 위에만들기*/
    form.addEventListener("submit", handlesubmit)
}    


/*한개의 argument(인자)를 가짐 */

function paintGreeting(text){
    /*만약텍스트를 색칠할거면 폼을 숨겨야만*/
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){// she is not
        askForName();

    }else{ // she is
        paintGreeting(currentUser);

    }
}    

function init(){
    loadName();
}

init();