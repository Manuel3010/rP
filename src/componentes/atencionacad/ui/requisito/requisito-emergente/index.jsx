/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';

import PasoRequisitoResource from '../../../datos/acceso/pasorequisito/'

class RequisitoEmergente extends React.Component{
    
    constructor(props){
       super(props);
       this.state= {
           requisitos:[]
       };
       this.pasoRequisitoResource= new PasoRequisitoResource();
        
       
    }
    
    componentWillMount(){
    //    this.pasoRequisitoResource=
        
        
    }
    
}