/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import GeneralBoundary from "../generalboundary/"

class PasoRequisitoResource extends GeneralBoundary{
    
    constructor(){
        super();
        this.resource= this.baseUrl + "pasoRequisito/";                
    }
    
    findAll(){
        let salida= fetch(this.resource)
                .then((response)=>{
                    return response.json();
                    
                });
                
        return salida;
        
    }
}
export default PasoRequisitoResource
