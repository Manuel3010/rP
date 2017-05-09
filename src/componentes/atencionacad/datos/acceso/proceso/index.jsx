/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import GeneralBoundary from "../generalboundary/"

class ProcesoResource extends GeneralBoundary{
    
    constructor(){
        super();
        this.resource= this.baseUrl + "Proceso/";                
    }
    
    findAll(){
        let salida= fetch(this.resource)
                .then((response)=>{
                    return response.json();
                    
                });
                
        return salida;
        
    }
}
export default ProcesoResource