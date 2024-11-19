import { useState } from "react";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AddProduct/AppProduct";

export const App = () => {
    const [enableCouter, setEnableCounter] = useState(false)
    return (
        <div>
            <MiPrimerComponent
                text={"Texto desde propiedades"}
                color="red"
                fontSize={3}
            />
            
            { enableCouter && <ComponentCounter/> }
            <button onClick={()=>{
                setEnableCounter(!enableCouter);
            }}>Mostrar u ocultar Counter</button>
            
            <ComponentUseEffect />

            <FormComponent/>

            <AppProduct/>
            
  

        </div>
    );
};
