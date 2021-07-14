module.exports = (manager) => `<div class="card employeeCard">
  <div class="card-header text-center">
    <h2 class="card-title">${manager.name}</h2>
    <h3 class="card-title">${manager.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${manager.email}">${manager.email}</a>
      </li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>`;
