# Proyecto de Card Validation
Aplicación Web para ingresar donaciones a findaciones encargadas del rescate y reintegración de animales domesticos.

 ### Imagen final del proyecto.
![img principal](https://github.com/andreasvidal/SCL019-card-validation/blob/main/src/assets/img_readme/Slide1.jpg)
![img principal](https://github.com/andreasvidal/SCL019-card-validation/blob/main/src/assets/img_readme/Slide2.jpg)
![img principal](https://github.com/andreasvidal/SCL019-card-validation/blob/main/src/assets/img_readme/Slide3.jpg)

### Valida datos de tarjetas de crédito
La función debe recibir un elemento DOM que contenga <input>s con los siguientes nombres (atributo name):

- **number (Card Number):**
### Fragmento de códogo Formulario


    <form id="formValidation" class="form-validation">
         <div class="data-card" id="dataForm">
            <label for="inputNumber">Número Tarjeta</label>
            <input type="text" id="inputNumber" name="number" maxlength="16" autocomplete="off" pattern="[0-9]+" placeholder="XXXX XXXX XXXX XXXX" required/>
            <h5 id="print"> </h5>
        </div>
        <div class="data-card">
            <label for="inputNameUser">Nombre </label>
            <input type="text" id="inputNameUser" name="nameUser" required/>
            <h5 id="print"> </h5>
        </div>
        <!--datos expiración tarjeta-->
        <div class="flexbox">
            <div class="data-card expider-date">
                <label for="monthSelect">Expiración</label>
                <div class="flexbox">
                    <div class="data-card-select">
                        <select name="monthSelect" id="monthSelect" required>
              <option disabled selected>Mes</option>
            </select>
                    </div>
                    <div class="data-card-select">
                        <select name="yearSelect" id="yearSelect" required>
            <option disabled selected>Año</option>
          </select>
                    </div>
                </div>
            </div>
            <div class="data-card ccv">
                <label for="inputCcv">CVV</label>
                <input type="text" id="inputCcv" name="inputCcv" maxlength="3" required>
            </div>
        </div>
        <button type="submit" value="sendForm" class="btn-send" id="sendForm">Enviar</button>



# Feedback recibido:
- Agrandar el boton para ingresar al formulario
- agregar boton para volver
- arreglar archivo css (style)

