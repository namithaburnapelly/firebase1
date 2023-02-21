import { app } from './firebaseConfig.js'
import { getDatabase, set, ref, get, child, update, remove } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js'

const db = getDatabase()

let addBtn = document.getElementById('addBtn');
let upBtn = document.getElementById('upBtn');
let dele = document.getElementById('deleBtn');
// let sel = document.getElementById('selectBtn');

let Name, Rollno, email, phone;

function addStudent() {
    readDetails();
    set(ref(db, "Students/" + Rollno), { Name, Rollno, email, phone })
        .then(() => {
            alert("Entry added Sucessfully")
        })
        .catch(() => {
            alert('Error adding entry')
        })
    location.reload();
}

function updateStu() {
    readDetails();
    update(ref(db, "Students/" + Rollno), { Name, Rollno, email, phone })
        .then(() => {
            alert("Data updated")
        })
        .catch(() => {
            alert("Error updating")
        })
    location.reload();
}

function deleStudent() {
    Rollno = document.getElementById('rollno').value
    remove(ref(db, "Students/" + Rollno))
        .then(() => {
            alert("Sucessfully deleted")
        })
        .catch(() => {
            alert("Eroor deleting")
        })
    location.reload()
}
// function re() {
//     var lead = getDatabase.ref('leads');
//     lead.on('Name', function (snapshot) {
//         snapshot.forEach(element => {
//             var childData = element.val();
//             console.log(childData)
//         });
//     })
// }

function readDetails() {
    Name = document.getElementById('name').value
    Rollno = document.getElementById('rollno').value
    email = document.getElementById('email').value
    phone = document.getElementById('phone').value
}

addBtn.addEventListener("click", addStudent)
upBtn.addEventListener("click", updateStu)
dele.addEventListener("click", deleStudent)
// sel.addEventListener("click", re)