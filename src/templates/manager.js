module.exports = (manager) => `<div class="card employeeCard">
<div id="entireCard">
  <div class="card-header text-center" id="cardHeaderSec">
  <i class="bi bi-person-circle"></i>
    <h2 class="card-title">${manager.name}</h2>
    <h3 class="card-title">${manager.getRole()}</h3>
  </div>
  <div class="card-body" id="cardBodies">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${manager.email}">${manager.email}</a>
      </li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
  </div>
</div>`;
