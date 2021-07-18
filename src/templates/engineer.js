module.exports = (engineer) => `<div class="card employeeCard">
<div id="entireCard">
    <div class="card-header text-center" id="cardHeaderSec">
    <i class="bi bi-person-circle"></i>
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">${engineer.getRole()} </h3>
    </div>
    <div class="card-body" id="cardBodies">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${
              engineer.email
            }">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${
              engineer.gitHub
            }" target="_blank" rel="noopner noreferrer">${
  engineer.gitHub
}</a></li>
        </ul>
    </div>
    </div>
</div>`;
