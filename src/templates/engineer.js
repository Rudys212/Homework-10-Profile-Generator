module.exports = (engineer) => `<div class="card employee-Card">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">${engineer.getRole()} </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ engineerEmail }}">{{ email }}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ engineerGithub }}" target="_blank" rel="noopner noreferrer">{{ gitHub }}</a></li>
        </ul>
    </div>
</div>`;
