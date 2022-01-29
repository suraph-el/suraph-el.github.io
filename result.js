<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Result Page</title>
  <style>
    body{
      font-family: Georgia, 'Times New Roman', Times, serif;
      margin: 0;
      padding:0;
    }
    #header{

      background-color: black;
      color: white;
      font-size: 30px;
      text-align: center;
      padding:20px;

    }
    #soln{
      text-align: center;
      font-size: 40px;
    }
    a{
      font-size:20px;
      text-decoration: none;
      color: green;
    }
   


  </style>
</head>
<body>
  <div id='header'>
    Simple Calculator
  </div>
  <div id='soln'>
    <h3>The Answer is: </h3>
      <h1><%=answer%></h1>
      <a href='http://127.0.0.1:5500/Lab8-calculator/calculator.html'>Another Calculation>></a>
  </div>

</body>
</html>
