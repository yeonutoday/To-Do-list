const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput=toDoForm.querySelector("input")
    toDoList= document.querySelector(".js-toDoList")

//아마 로컬스톨로지에 저장되어있는 todo리스트인가봄 변수로 만듬
const TODOS_LS='toDos';

let toDos = [];
/*우선 변수 todo에 비어있는 array를 만들어주고(해야할 일이 여러가지일때를 대비해서)
>그리고 해야할일을 생성했을때 그게 이 toDo의 array에 추가되도록하자
>그러기위해선 toDoObj란걸 만들어야함*/



function deleteToDo(event){
  /*여기 paintodo에 우리가 delete버튼을 만들*/
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); 
  const cleanToDos = toDos.filter(function(toDo){
      console.log(li.id);
      return toDo.id !== parseInt(li.id);

  });
  toDos=cleanToDos;
  saveToDos();
  /*이 함수는 toDos를 저장*/
}

function saveToDos(){
    /*savToDos는 여기 이 toDos를 가져와 로컬스톨지에 저장하는 역할*/
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}

function paintToDo(text){
    //이건 당연히 text를 가지고 밑에있는기능을불러올거임>이젠 todo 만들차례:paint to do ul 만들거임
    /*queryselctor은 우리가 html에서 무언가를 얻었다는뜻.만약 너가 무언가를 생성하기 원한다면?
    >완전 쉬움 document.createElement요소넣기>그리고 여기서 우리가 생성해야할 element인 lu을 괄호안에 적기 */
    const li = document.createElement("li");
    /*근데 이름은 상관없다....potato여도 괜차눔>delete버튼도 넣고싶당*/
    const delBtn= document.createElement("button");
    delbt.innerText ="a";
    delbt.addEventListener("click", deleteToDo);

    /* const span = document.createElement("span");

    const newId = toDos.length+1; >>뭐시야 이건 강의에없는것같은데*/

    /*list에도 id를 주고싶다>왜냐면 할일 목록 지웠을때 어떤id를 지웠는지 알수있게*/
    span.innerText = text ;
    /*이 text는 submit fuction에서 나온거임>>apeerndChild 넣기(이게뭐시냐면 뭔가를 그의 father element에 넣는거임)*/
    li.appendChild(delBtn);
    li.appendChild(span);

    li.id = newId;

    /*마지막으로 가장 중요한건 empty(비어있는)li만들었고,
    그 담엔 버튼, 그담엔 span만들고나면
    span을 li안에 넣고 버튼을 li 안에 넣어>>예!??!*/
    toDoList.appendChild(li);
    /*괄호안에 방금 만든 li 넣고 실행*/
    /*이젠 칸안에 todo넣고 엔터를 치면...li를 생성하고 del버튼이랑 span생성해야함
    >span과delete버튼을 li 안에 append(첨부)하고 마지막에 li를 ul에다 append하는거야*/

    const toDoObj={
        text: text,
        id:newId
    };

    toDos.push(toDoObj);
    saveToDos();
}



function handleSubmit(event){
    /*paremeter에 event불러오고 event.preventDefault불러온다음 */
    event.preventDefault();
    const cuurentValue= toDoInput.value;
    /*todoinput의 변수값을 불러옴>
    또 위에 paintTodDo라는 다른 기능 만들기*/
    paintToDo(cuurentValue);
    /*아싸 이젠 시험해보기!!*/
    /*근데 우리가 to do 생성하고 삭제하고싶을땐*/
    toDoInput.vaule="";




}

function something(toDo){
    console.log(toDo.text);
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS)
    /*투두리스트 불러오기 글고 if구문 갈거임 */
    if(loadedToDos!==null){
        console.log(loadedToDos);
       const parsedToDos = JSON.parse(loadedToDos);
       paresedToDos.forEach(fuction(toDo)){
         paintToDo(toDo.text);
       });
        /*투두랑 null이 같으면(결론은안했단건가)여기에아무것도안할거임
        걍 showing일테니>그래서 사실할게없음 null이랑 달라야 그제서야할게생김
        >>여긴나중아하자 나중에 이상한걸 추가해야해서
        >>우선 todo리스트부터만들자 */

        /*parsed to do를 paint(보여주자) */

    }

}

function init(){
    loadToDos();
    /*투두추가 이벤트리스너추가+서브밋하고*/
    toDoForm.addEventListener("submit", handleSubmit);
    /*이젠위에 function만들차례>loadToDos function위에*/
}

init();
