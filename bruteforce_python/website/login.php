
<?php 
	
	$user_token = md5(random_int(0, 99));
	$admins = array(
		array(
			"username" => "admin",
			"password" => "password"
		),
		array(
			"username" => "dano",
			"password" => "dano"
		),
		array(
			"username" => "johndoe",
			"password" => "superjohndoe"
		)
	);


	if (isset($_POST['submit']) and $_POST['submit'] == "Login") {
		
		$username = $_POST['username'];
		$password = $_POST['password'];
		//$user_token = $_POST['user_token'];

		$message = "";

		for ($i=0; $i < count($admins) ; $i++) { 
			
			if (($admins[$i]["username"] != $username) or ($admins[$i]["password"] != $password)) {
				
				$message = "Login Failed";
				$is_successful_connected = false;

			} else {
				$is_successful_connected = true;
				header('location: ./admin/');
			}

		}


	}

?>

<!DOCTYPE html>

<html>

	<head>
		<title>BruteForce - Python</title>
		<meta name="viewport" content="initial-scale=1.0">
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">

		<style type="text/css">
			
			body {
				width: 500px;
				margin: 0px auto; 
			}

			header {
				padding: 10px 5px;
				background-color: #0003;
			}

			h1{
				display: inline;
			}


			fieldset {
				padding: 30px;
			}

			.form-item {
				margin: 10px;
			}

			.form-item input {
				display: block;
				font-size: 1.2em;
				margin-top: 3px;
				width: 400px;
				padding: 3px;
			}

			button {
				font-size: 1.3em;
				margin: 10px auto;
				width: fit-content;
			}


			footer {
				text-align: center;
				padding: 50px;
				background-color: #0003;
			}


		</style>

	</head>

	<body>

		<header>
			<h1>Brute Force With Python</h1>
			<span>By @Danofred0</span>
		</header>

		<p>
			Cette page a ete mise sur pied pour faire des teste de bruteforcing dessus !!!

		</p>

		<form method="POST" action="./login.php">
			
			<fieldset>
				<legend>Connexion</legend>

				<div class="form-item">
					<label for="username">Username</label>
					<input type="text" name="username" placeholder="Enter Your username">
				</div>

				<div class="form-item">
					<label for="password">Password</label>
					<input type="password" name="password" placeholder="Enter Your password">
				</div>
				<input type="hidden" name="user_token" value="<?= $user_token;?>" >
				<button type="submit" name="submit" value="Login">Login</button>

			</fieldset>

		</form>

		<br>
		<?php 
			if(isset($is_successful_connected)) {
				if($is_successful_connected == false)
					echo '<span class="message">'. $message .'</span>';
			}			
		?>

		<br><br><br><br><br>


		<footer>
			Copyrigth &copy; Tout droit reserver - 2022
		</footer>

	</body>

</html>