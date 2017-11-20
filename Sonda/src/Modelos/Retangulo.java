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
public class Retangulo extends Coordenada{
      private float lado1;
      private float lado2;
      
      public Retangulo(){
          this.lado1 = 0;
          this.lado2 = 0;
      }
      
      public Retangulo(Coordenada C,float X,float Y){
          
          super(C);
          this.lado1 = X;
          this.lado2 = Y;
      }
      
       public Retangulo(Retangulo nva){
          this.lado1 = nva.lado1;
          this.lado2 = nva.lado2;
      }
       
    public float getX(){
        return this.lado1;
    }
    
    public float getY(){
        return this.lado2;
    }
    
    public void setX(float X){
         this.lado1 = X;
    }
    
    public void setY(float Y){
         this.lado2 = lado2;
    }
}
