/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sonda;

/**
 *
 * @author fabio
 */
public class Retangulo {
    private nave n;
    private int x;
    private int y;
    
    Retangulo(){
        x = 0;
        y = 0;
       
    }
    
    Retangulo(int X,int Y){
        x = X;
        y = Y;
    }
    
        
    public int getX(){
        return this.x;
    }
    
    public int getY(){
        return this.y;
    }
    

    
    void setX(int X){
        this.x = X;
    }
    
    void setY(int Y){
        this.y = Y;
    }
    
    public nave getNave(){
        return n;
    }
//    
//   public int getXNave(){
//       return n.getX();
//   }
//   
//   public int getYNave(){
//       return n.getX();
//   }
//   
//   public String getDirNave(){
//       return n.getDir();
//   }
}
