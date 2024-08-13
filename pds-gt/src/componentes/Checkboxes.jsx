import '../styles/checkboxes.css'
const CheckBox = () => {
    return ( 
        <>
            <fieldset>
                <legend>Marcas</legend>
                <div>
                    <input type="checkbox"  name="Adidas" />
                    <label for="Adidas">Adidas</label>
                </div>
                <div>
                    <input type="checkbox"  name="Calenciaga"  />
                    <label for="Calenciaga">Calenciaga</label>
                </div>
                <div>
                    <input type="checkbox"  name="K-Swiss"  />
                    <label for="K-Swiss">K-Swiss</label>
                </div>
                <div>
                    <input type="checkbox"  name="Nike"  />
                    <label for="Nike">Nike</label>
                </div>
                <div>
                    <input type="checkbox"  name="Puma"  />
                    <label for="Puma">Puma</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>Categorias</legend>
                <div>
                    <input type="checkbox"  name="Esporte e lazer" />
                    <label for="Esporte-e-lazer">Esporte e lazer</label>
                </div>
                <div>
                    <input type="checkbox"  name="Casual"  />
                    <label for="Casual">Casual</label>
                </div>
                <div>
                    <input type="checkbox"  name="Utilitário"  />
                    <label for="Utilitário">Utilitário</label>
                </div>
                <div>
                    <input type="checkbox"  name="Corrida"  />
                    <label for="Corrida">Corrida</label>
                </div>
               
            </fieldset>

            <fieldset>
                <legend>Gênero</legend>
                <div>
                    <input type="checkbox"  name="Masculino" />
                    <label for="Masculino">Masculino</label>
                </div>
                <div>
                    <input type="checkbox"  name="Feminino"  />
                    <label for="Feminino">Feminino</label>
                </div>
                <div>
                    <input type="checkbox"  name="Unisex"  />
                    <label for="Unisex">Unisex</label>
                </div>
               
            </fieldset>

            <fieldset>
                <legend>Estado</legend>
                <div>
                    <input type="radio"  name="novoUsado" checked/>
                    <label for="novo">Novo</label>
                </div>
                <div>
                    <input type="radio"  name="novoUsado"  />
                    <label for="usado">Usado</label>
                </div>
               
               
            </fieldset>
        </>
     );
}
 
export default CheckBox;