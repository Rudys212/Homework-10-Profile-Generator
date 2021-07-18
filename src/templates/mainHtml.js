function mainHtml(team) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron jumbotron-fluid mb-3 teamHeader">
                <h1 class="display-4 text-center" id="jumboHeader">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="teamSec col-12 d-flex justify-content-center">
                ${team}
            </div>
        </div>

    </div>
</body>`;
}

module.exports = mainHtml;
