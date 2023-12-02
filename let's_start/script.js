let mainSetIMG = [];
let mainSet = [];
let partialGroup=[];
let group=[];
let freq=[];
let without_complement=[];
let Solve=[];
let difference=[];
let sum=0;
let negative=0;
let countForMatrix=0;
let space=0,x;
let count=0,z,r="",matrics=0;
let error=0;
let countOk=0;
let notValueElementInTheGroup;
const main_input = document.querySelector(".enter-number-of-main-set")
const main_input_val = main_input.value;
let DoneNumber=document.querySelector(".next-number");
    let clone_Solve=DoneNumber.cloneNode();
    // clone_Solve.className="Solve-for-solve";
    clone_Solve.textContent="The Solve";
    clone_Solve.style.width="160px";



main_input.onclick=function()
{
    document.querySelector(".Sample").innerHTML="Sample Space";
    document.querySelector(".Sample").style.color="black";
    document.querySelector(".Sample").style.backgroundColor="#f9f9f9";
    document.querySelector(".Sample").style.transform="translateX(10px) translateY(-15px)";
    document.querySelector(".Sample").style.padding="0 10px";
    document.querySelector(".enter-number-of-main-set").style.border="4px solid #FC0FC0";
}

function main(main_input_val) {
    if (main_input_val=="")
    {
        main_input_val.preventDefault();
    }
    else{
    for(let i=0;i<main_input_val.length;i++)
    {
        mainSetIMG[i] = main_input_val[i];
    }
    let x=0,negative=0;
    for(let y=0;y<mainSetIMG.length;y++)
    {
        if  (mainSetIMG[y]!== " ")
        count++;
        else if(mainSetIMG[y]== " ")
        {
            z=y;
            console.log(1);
            for(let j=z-count;j<z;j++)
            {
                r+= mainSetIMG[j];
            }
            mainSet[x]=r;
            if (mainSet[x]<0)
            negative++;
            if(freq[mainSet[x]]===undefined)
            {
                freq[mainSet[x]]=0;
            }
            if( without_complement[mainSet[x]]===undefined){
                    without_complement[mainSet[x]]=0;}
            if (difference[mainSet[x]]===undefined)
            {
                difference[mainSet[x]]=0;
            }
            x++;
            count=0;
            r="";
        }
    }
    if (negative===0)
    DoneNumber.innerHTML="Done";
    else if (negative>0)
    {
        window.alert("You should not enter negative numbers")
    }
    console.log(mainSet);
}
}

document.querySelector(".complete-operation").onclick=function(e)
{
    if(DoneNumber.innerHTML==="Done"){
    document.querySelector(".select select").style.display="block";
    document.querySelector(".for-matrics").style.display="block";
    }
    else
    {
        e.preventDefault();
        window.alert("You must enter array elements before to enter on OK ")
    }
}

document.querySelector(".next-number-1").onclick=function (e)
{
    if (valueSelect===0)
    {
        e.preventDefault()
    }
    else{
    matrics++;
    if(matrics>1 && countForMatrix=== 0 )
    {
        e.preventDefault();
    }
    else{
    countForMatrix=0;
    let DivCurrentMatrix=document.createElement("div");
    DivCurrentMatrix.className="DivCurrentMatrix";

    let curent_Matrics=document.createElement("input");
    curent_Matrics.hasAttribute("type" , "text");
    curent_Matrics.className="curent-Matrics enter-number-of-main-set";
    curent_Matrics.setAttribute("placeholder" , "Enter the elements of matrics "+ matrics);
    // span_current_matrix.style.padding="0 10px";

    let btn=document.createElement("button");
    btn.className="ok-curent-matrix"
    btn.innerHTML = 'OK?';

    DivCurrentMatrix.appendChild(curent_Matrics);
    // DivCurrentMatrix.appendChild(span_current_matrix);
    DivCurrentMatrix.appendChild(btn);
    if (matrics>1){
    DivCurrentMatrix.appendChild(clone_Solve);
    }

    document.body.appendChild(DivCurrentMatrix);
    document.querySelector(".container-left1").appendChild(DivCurrentMatrix);

    btn.onclick=function(ev){
    if (curent_Matrics.value==="")
    {
        ev.preventDefault();
        window.alert("You must enter array elements before adding others")
    }
    else{
    btn.innerHTML="OK";
    countOk++;
    for(let i=0;i<curent_Matrics.value.length;i++){
    partialGroup[i]=0;
    }
    for(let i=0;i<curent_Matrics.value.length;i++)
    {
        partialGroup[i] = curent_Matrics.value[i];
    }
    x=0;
    for(let y=0;y<curent_Matrics.value.length;y++)
    {
        if  (partialGroup[y]!== " ")
        count++;
        else if(partialGroup[y]== " ")
        {
            space++;
            z=y;
            for(let j=z-count;j<z;j++)
            {
                r+= partialGroup[j];
            }
                group[x]=r;
                if (valueSelect==4 && matrics==1)
                {
                    difference[group[x]]++;
                }
                if (matrics===1 &&(valueSelect===312 || valueSelect===322))
                {
                    without_complement[group[x]]++;
                }
                freq[group[x]]++;
                x++;
                count=0;
                r="";
        }
    }
    
    console.log(group);
    console.log(freq);
    console.log(without_complement)
    countForMatrix=1;
    space=0;
    for(let i=0;i<curent_Matrics.value.length;i++)
    {
        group[i]=0;
    }
    let bro=document.createElement("br");
    document.body.appendChild(bro);
    }
}
}
}
}

let valueSelect=0;
function getselectvalue(){
    var selectValue=document.getElementById("value-select").value;
    console.log(selectValue);
    if(selectValue==="Combin")
    {
        valueSelect=2;
    }
    else if(selectValue==="Intersection")
    {
        valueSelect=1;
    }
    else if(selectValue==="complement-inter-complement")
    {
        valueSelect=311;
    }
    else if(selectValue==="complement-inter-without-complement")
    {
        valueSelect=312;
    }
    else if(selectValue==="complement-combin-complement")
    {
        valueSelect=321;
    }
    else if(selectValue==="complement-combin-without-complement")
    {
        valueSelect=322;
    }
    else if(selectValue==="Elements")
    {
        valueSelect=4;
    }

console.log(valueSelect);
}


clone_Solve.onclick=function(event)
{
    Solve=[];
    for (let i=0;i<mainSet.length;i++)
    {
    if ((valueSelect==1 && freq[mainSet[i]]===matrics))
    {
            Solve[sum]=mainSet[i];
            sum++;
    }
    else if (valueSelect==2 && freq[mainSet[i]]>=1)
    {
            Solve[sum]=mainSet[i];
            sum++;
    }
    else if (valueSelect==311 && freq[mainSet[i]]===0)
    {
        Solve[sum]=mainSet[i];
            sum++;
    }
    else if (valueSelect==321 && freq[mainSet[i]]!==matrics)
    {
        Solve[sum]=mainSet[i];
            sum++;
    }
    else if (valueSelect==312 && freq[mainSet[i]]===matrics-1 && without_complement[mainSet[i]]===0)
    {
        Solve[sum]=mainSet[i];
            sum++;
    }
    else if (valueSelect==322 && freq[mainSet[i]]>=1 && without_complement[mainSet[i]]===0)
    {
        Solve[sum]=mainSet[i];
            sum++;
    }
    else if (valueSelect==4 && freq[mainSet[i]]==1 && difference[mainSet[i]]==1)
    {
        Solve[sum]=mainSet[i];
            sum++;
    }
    }
    if (countOk>=2){
    document.querySelector(".The-solve").innerHTML=Solve;
    document.querySelector(".The-solve").style.backgroundColor="#FC0FC0";
    }
    if(Solve.length==0)
    document.querySelector(".The-solve").innerHTML="∅";
    document.querySelector(".The-solve").style.backgroundColor="#FC0FC0";


}
