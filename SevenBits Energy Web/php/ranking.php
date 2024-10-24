<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "SevenBitsEnergy";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para obtener el top 10
$sql = "SELECT nombre, puntaje FROM ranking ORDER BY puntaje DESC LIMIT 10";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<li>" . $row["nombre"] . " - " . $row["puntaje"] . "</li>";
    }
} else {
    echo "<li>No hay datos disponibles</li>";
}

$conn->close();
?>
