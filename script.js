const container = document.getElementById("nav_li");
const total_salary= document.getElementById("total_slry");
// button
const load_btn= document.getElementById("load");
const calculate_btn= document.getElementById("cal");
const total_btn= document.getElementById("total");
const export_btn= document.getElementById("export");

// button functioning
load_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    addloadData();
})
calculate_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    addcalData();
})
total_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    sumData();
})
export_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    addexportData();
})

//API fetching

function loadData(){
        fetch("data.json")
        .then((respose)=>{
            return respose.json();
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log("Error:",error);
            alert("Error:",error);
        })
}


function calData(){
        fetch("data.json")
        .then((respose)=>{
            return respose.json();
        })
        .then((result)=>{
           console.log(result);
        })
        .catch((error)=>{
            console.log("Error:",error);
            alert("Error:",error);
        })
}
function totalData(){
        fetch("data.json")
        .then((respose)=>{
            return respose.json();
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log("Error:",error);
            alert("Error:",error);
        })
}
function exportData(){
        fetch("data.json")
        .then((respose)=>{
            return respose.json();
        })
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log("Error:",error);
            alert("Error:",error);
        })
}

//appending the elements
function appendelement(){
       const div_row = document.createElement('div');
    const div_cell = document.createElement('div');
    div_row.className="row";
    div_cell.className="cell";

    container.appendChild(div_row);
    div_row.appendChild(div_cell);
    return div_cell;
}

//adding the data
function  addloadData(){
    const AllData = loadData();
    AllData.forEach(element => {
         const cell =appendelement();
        cell.innerHTML=`${element.id} ${element.name} ${element.department} ${element.salary} ${element.experience}`.join("");
    });


}