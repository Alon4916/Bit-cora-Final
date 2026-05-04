
// 🔑 PEGA TU CONFIG REAL AQUÍ
const firebaseConfig = {
apiKey: "AIzaSyAFnoymv8GXRbXT_OQVGOgJbFsN9T1lOI0",
authDomain: "bitacora-final-7192d.firebaseapp.com",
projectId: "bitacora-final-7192d",

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 📦 ELEMENTOS
const nombre = document.getElementById("nombre");
const grupo = document.getElementById("grupo");
const fecha = document.getElementById("fecha");
const actividad = document.getElementById("actividad");
const descripcion = document.getElementById("descripcion");
const resultado = document.getElementById("resultado");
const conclusion = document.getElementById("conclusion");

const salida = document.getElementById("salida");

const btnGuardar = document.getElementById("btnGuardar");
const btnConsultar = document.getElementById("btnConsultar");

// 📥 OBTENER DATOS
function obtenerDatos() {
  return {
    nombre: nombre.value,
    grupo: grupo.value,
    fecha: fecha.value,
    actividad: actividad.value,
    descripcion: descripcion.value,
    resultado: resultado.value,
    conclusion: conclusion.value
  };
}

// 💾 GUARDAR
btnGuardar.addEventListener("click", async () => {
  const datos = obtenerDatos();

  try {
    await addDoc(collection(db, "bitacora"), datos);
    alert("Guardado en Firebase 🔥");
  } catch (e) {
    console.error(e);
  }
});

// 📖 CONSULTAR
btnConsultar.addEventListener("click", async () => {

  salida.textContent = "Cargando...\n";

  const querySnapshot = await getDocs(collection(db, "bitacora"));

  let texto = "";

  querySnapshot.forEach((doc) => {
    const d = doc.data();

    texto += `
Nombre: ${d.nombre}
Actividad: ${d.actividad}
Grupo: ${d.grupo}

`;
  });

  salida.textContent = texto;
});