/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelos;

/**
 *
 * @author fabio
 */
public class Nave extends Coordenada{
    public Coordenada  C1 = new Coordenada();
    public Coordenada  C2 = new Coordenada();
    
    public Nave(){
        super();
        this.C1.setX(0);
        this.C1.setY(0);
        
        this.C2.setX(0);
        this.C2.setY(0);
    }
    
    public Nave(Coordenada A,Coordenada B,Coordenada C){

        
         this.C1.setX(B.getX());
        this.C1.setY(B.getY());
        
         this.C2.setX(C.getX());
        this.C2.setY(C.getY());
        
    }
    
   public Nave(Nave C){
       super(C.getX(),C.getY());
       this.C1.setX(C.getX());
        this.C1.setY(C.getY());
        this.C2.setX(C.getX());
        this.C2.setY(C.getY());
   }
   
   public void SetVertice(Coordenada A,int lado){
        
        
        if(lado == 1){
            this.setX(A.getX());
            this.setX(A.getY());
        }
        
        if(lado == 2){
            this.C1.setX(A.getX());
            this.C1.setX(A.getY());            
        }
        
        if(lado == 3){
            this.C2.setX(A.getX());
            this.C2.setX(A.getY());            
        }
   }
}
