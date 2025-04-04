import { FunctionalComponent } from "preact/src/index.d.ts";

const Formulario: FunctionalComponent = () => {
  return (
    <div>
      <form method="GET" action="/">

        <input type="text" name="phone" placeholder="Teléfono" />

        <button type="submit">Enviar telefono</button>
      </form>
    </div>
  );
};

export default Formulario;