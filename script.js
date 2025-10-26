const container = document.getElementById("nav_li");
const total_salary= document.getElementById("total_slry");
const title_container= document.querySelector('.row_title');
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

// load function 
function addloadData(){ 
      while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }

    fetch("data.json").then((response)=>{
        return response.json();
    }).then((result)=>{
        // return data = result;
        const sortdata = result.map((person)=>{
            return {id:   person.id, 
                    name: person.name,
                    department: person.department,
                    salary: person.salary,
                    experience: person.experience};
        }).sort((a,b)=>b.salary-a.salary);
        console.log(sortdata);

        sortdata.forEach(p => {
            const Rowdiv = document.createElement('div');
            Rowdiv.className="row";

            // id cell
            const idCell = document.createElement('div');
            idCell.className="cell";
            idCell.innerHTML=p.id;
            Rowdiv.appendChild(idCell);
             // name cell
            const nameCell = document.createElement('div');
            nameCell.className="cell";
            nameCell.innerHTML=p.name;
            Rowdiv.appendChild(nameCell);
             // dept cell
            const deptCell = document.createElement('div');
            deptCell.className="cell";
            deptCell.innerHTML=p.department;
            Rowdiv.appendChild(deptCell);
             // salary cell
            const salaryCell = document.createElement('div');
            salaryCell.className="cell";
            salaryCell.innerHTML=p.salary;
            Rowdiv.appendChild(salaryCell);
             // exp cell
            const expCell = document.createElement('div');
            expCell.className="cell";
            expCell.innerHTML=p.experience;
            Rowdiv.appendChild(expCell);
          
            container.appendChild(Rowdiv);
        });
    }).catch((error)=>{
        console.log("Error:"+ error);
    })
};

// calculate insights function
function addcalData(){
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    while (title_container.children.length > 5) {
        title_container.removeChild(title_container.lastChild);
    }
 
    const divtitle = document.createElement('div');
    divtitle.className="cell";
    divtitle.id="bonus";
    divtitle.innerHTML="Annual Bonus";
    title_container.appendChild(divtitle);


    fetch("data.json").then((response)=>{
        return response.json();
    }).then((result)=>{

        // filter the data experience >=3 years
        const sortdata = result.filter((function(p){return p.experience>=3;})).map((person)=>{
            return {id: person.id, 
                    name: person.name,
                    department: person.department,
                    salary: person.salary,
                    experience: person.experience};
        }).sort((a,b)=>b.salary-a.salary);
        console.log(sortdata);

        sortdata.forEach(p => {
            const Rowdiv = document.createElement('div');
            Rowdiv.className="row";

            // id cell
            const idCell = document.createElement('div');
            idCell.className="cell";
            idCell.innerHTML=p.id;
            Rowdiv.appendChild(idCell);
             // name cell
            const nameCell = document.createElement('div');
            nameCell.className="cell";
            nameCell.innerHTML=p.name;
            Rowdiv.appendChild(nameCell);
             // dept cell
            const deptCell = document.createElement('div');
            deptCell.className="cell";
            deptCell.innerHTML=p.department;
            Rowdiv.appendChild(deptCell);
             // salary cell
            const salaryCell = document.createElement('div');
            salaryCell.className="cell";
            salaryCell.innerHTML=p.salary;
            Rowdiv.appendChild(salaryCell);
             // exp cell
            const expCell = document.createElement('div');
            expCell.className="cell";
            expCell.innerHTML=p.experience;
            Rowdiv.appendChild(expCell);
            // annual bonus cell
            const bonusCell = document.createElement('div');
            bonusCell.className="cell";
            bonusCell.innerHTML=p.salary*0.10*p.experience;
            Rowdiv.appendChild(bonusCell);
            container.appendChild(Rowdiv);
        });
    }).catch((error)=>{
        console.log("Error:"+ error);
    })
};