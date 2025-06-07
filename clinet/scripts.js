// מאזין לכך שכל תוכן הדף נטען, ואז מפעיל פונקציה לפי סוג הדף
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");

  if (page === "departments") loadDepartments();
  else if (page === "users") loadUsers();
  else if (page === "employees") loadEmployees();
  else if (page === "shifts") loadShifts();
});



//מחלקות
async function loadDepartments() {
  const listContainer = document.getElementById("departmentsList");
  if (!listContainer) return;

  try {
    const res = await fetch("http://localhost:4000/departments");
    const departments = await res.json();

    departments.forEach(dept => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${dept.name}</h3>
        <p>מזהה מנהל: ${dept.manager}</p>
        <button onclick="goToShifts('${dept.id}')">מעבר למשמרות</button>
      `;

      listContainer.appendChild(div);
    });
  } catch (err) {
    console.error("שגיאה בטעינת מחלקות:", err);
  }
}

//משתמשים 
async function loadUsers() {
  const listContainer = document.getElementById("usersList");
  if (!listContainer) return;

  try {
    const res = await fetch("http://localhost:4000/users");
    const users = await res.json();

    users.forEach(user => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>אימייל: ${user.email}</p>
        <p>כמות פעולות: ${user.numofaction}</p>
      `;

      listContainer.appendChild(div);
    });
  } catch (err) {
    console.error("שגיאה בטעינת משתמשים:", err);
  }
}


//עובדים 
async function loadEmployees() {
  const listContainer = document.getElementById("employeesList");
  if (!listContainer) return;

  try {
    const res = await fetch("http://localhost:4000/employees");
    const employees = await res.json();

    employees.forEach(emp => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p>שנת התחלה: ${emp.startWorkYear}</p>
        <p>מזהה מחלקה: ${emp.departmentID}</p>
      `;

      listContainer.appendChild(div);
    });
  } catch (err) {
    console.error("שגיאה בטעינת עובדים:", err);
  }
}

//משמרות
async function loadShifts() {
  const listContainer = document.getElementById("shiftsList");
  if (!listContainer) return;

  try {
    const res = await fetch("http://localhost:4000/shifts");
    const shifts = await res.json();

    shifts.forEach(shift => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>תאריך: ${shift.date}</h3>
        <p>שעה התחלה: ${shift.startTime}</p>
        <p>שעה סיום: ${shift.endTime}</p>
        <p>עובדים: ${shift.employees.join(", ")}</p>
      `;

      listContainer.appendChild(div);
    });
  } catch (err) {
    console.error("שגיאה בטעינת משמרות:", err);
  }
}

//מעבר לדף של משמרות 
function goToShifts(departmentId) {
  window.location.href = `shifts.html?departmentId=${departmentId}`;
}


