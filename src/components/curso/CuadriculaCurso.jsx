import Curso from "./Curso"

function CuadriculaCurso(){
    return(
        <>
            <Curso
            titulo="Ejercicios de programación con Python y Node JS" 
            subtitulo="Profundiza y refuerza tus habilidades en programación a través de ejercicios con"
            imagen="https://app.ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Foriginal%2F32d773c4-93e7-4856-9c4d-40d68f31ced2.png&w=1920&q=75"
            />
            <Curso 
            titulo="Inteligencia Artificial con IBM Watson" 
            subtitulo="Aprende a implementar Inteligencia Artificial en tus proyectos de forma fácil"
            imagen="https://app.ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Foriginal%2F64ea23f2-e4cc-4d00-a2c0-cf862475c50e.png&w=1920&q=75"
            />
        </>
    )
}
export default CuadriculaCurso
