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
public class Coordenada {
 
    private  float x;
    private  float y;
    
    public Coordenada(){
        x = 0;
        y = 0;
    }
    
    public Coordenada(float X,float Y){
        x = X;
        y = Y;
    }
    
    public Coordenada(Coordenada nva){
        this.x = nva.x;
        this.y = nva.y;
    }
    
    public float getX(){
        return this.x;
    }
    
    public float getY(){
        return this.y;
    }
    
    public void setX(float X){
         this.x = X;
    }
    
    public void setY(float Y){
         this.y = Y;
    }
}
