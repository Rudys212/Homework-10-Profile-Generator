module.exports = (intern) => `<div class="card employeeCard">
<div id="entireCard">
  <div class="card-header text-center" id="cardHeaderSec">
  <i class="bi bi-person-circle"></i>
    <h2 class="card-title">${intern.name}</h2>
    <h3 class="card-title">${intern.getRole()}</h3>
  </div>
  <div class="card-body" id="cardBodies">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.id} </li>
      <li class="list-group-item">
        Email: <a href="mailto:${intern.email}">${intern.email}</a>
      </li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>
  </div>
</div>`;
